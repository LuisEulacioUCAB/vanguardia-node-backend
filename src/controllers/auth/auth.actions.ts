import axios, { AxiosError } from 'axios';
import {
  ConnectUserToProvider,
  CreateOrUpdateUserProvider,
  FacebookInfoUserPayload,
  FetchUserProviderArgs,
  FetchUserProviderByEmail,
  GoogleInfoUserPayload,
} from './auth.types';
import { PrismaClient, users, roles } from '../../generated/client';
import { Request, Response } from 'express';
import moment from 'moment';
import { ContextResolver } from '../../utils/types';
import jwt from 'jsonwebtoken';
import { APP_SECRET } from '../../utils/constants';
import bcrypt from 'bcrypt';
import { sendPostmarkSignupEmail } from '../postmark/postmark.actions';

const prisma = new PrismaClient();

export const jwtSign = (user: users) => ({ userId: user.id, email: user.email });

export const getGoogleUserInfo = async (token: string): Promise<GoogleInfoUserPayload | undefined> => {
  let response;
  try {
    response = await axios.get<GoogleInfoUserPayload | undefined>(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
    );

  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.error.message);
    }
  }

  return response?.data;
};


export const getFacebookUserInfo = async (token: string): Promise<FacebookInfoUserPayload | undefined> => {
  let response;
  try {
    response = await axios.get('https://graph.facebook.com/me', {
      params: {
        fields: 'name,gender,location,picture,email',
        access_token: token,
      },
    });

  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.error.message);
    }
  }

  return response?.data;
};

export const forgotPassword = async (req: Request, res: Response) => {
  const query = req.query;
  if (!query.token) {
    return res.redirect(`${query.redirect_url as string}?action=AUTH_FORGOT_PASSWORD_NOT_FOUND`);
  }

  const passwordReset = await prisma.password_reset.findFirst({
    where: {
      token: query.token as string,
    },
  });
  if (!passwordReset) return res.redirect(`${query.redirect_url as string}?action=AUTH_FORGOT_PASSWORD_NOT_FOUND`);

  const isActive = moment().isBetween(moment(passwordReset?.created_at), moment(passwordReset?.expired_at));

  if (!isActive) return res.redirect(`${query.redirect_url as string}?action=AUTH_FORGOT_PASSWORD_NOT_FOUND`);

  return res.redirect(`${query.redirect_url}?action=AUTH_RESET_PASSWORD&password_reset_token=${query.token}&email=${encodeURIComponent(passwordReset.email)}&form=${query.form}`);

};

export const fetchUserProvider = async (context: ContextResolver, args: FetchUserProviderArgs) => {

  if (!args.provider) throw Error('El social provider es requerido');
  if (!args.providerId) throw Error('El provider id es requerido');
  console.log('args', args);
  return context.prisma.users.findFirst({
    where: {
      social_providers: {
        some: {
          provider: args.provider,
          provider_id: args.providerId,
        },
      },
    },
    include: {
      social_providers: {
        select: {
          provider: true,
        },
      },
    },
  });
};

export const fetchUserProviderByEmail = async (context: ContextResolver, args: FetchUserProviderByEmail) => {
  if (!args.email) throw Error('El email es requerido');

  if (!args.providerId) throw Error('El provider id es requerido');

  if (!args.provider) throw Error('El provider id es requerido');


  return context.prisma.users.findUnique({
    where: {
      email: args.email,
      social_providers: {
        some: {
          provider: args.provider,
          provider_id: args.providerId,
        },
      },
    },
    include: {
      social_providers: {
        select: {
          provider: true,
        },
      },
    },
  });
};


export const connectUserToProvider = async (context: ContextResolver, args: ConnectUserToProvider) => {
  const isUserExists = await context.prisma.users.findUnique({
    where: {
      email: args.email,
    },
  });

  if (isUserExists) {

    const user = await context.prisma.users.update({
      where: {
        email: args.email,
      },
      data: {
        social_providers: {
          create: {
            url_register: args.url,
            provider_id: args.providerId,
            provider: args.provider,
          },
        },
      },
    });
    const token = jwt.sign(jwtSign(user), APP_SECRET);

    return {
      token,
      user,
    };
  }

  return undefined;
};

export const createOrConnectUserProvider = async (context: ContextResolver, user: users, args: CreateOrUpdateUserProvider) => {
  let token;
  let data;

  if (user) {
    // is user already exists return credentials
    token = jwt.sign(jwtSign(user), APP_SECRET);
    return {
      token,
      user,
    };
  }


  const password = await bcrypt.hash(`$%-/${args?.email}+2024`, 10);

  const role = await context.prisma.user_roles.findFirst({ where: { name: roles.USER } });

  if (!role) throw new Error('No hay rol de usuario dentro del sistema');


  const email = args.email || '';

  if (!email) {
    // Create user if email don't exists.
    data = await context.prisma.users.create({
      data: {
        name: args.name || '',
        email,
        password,
        role_id: role.id,
        social_providers: {
          create: {
            provider: args.provider,
            url_register: args.url as string,
            provider_id: args.providerId as string,
          },
        },
      },
    });

    token = jwt.sign(jwtSign(data), APP_SECRET);

    return {
      token,
      user: data,
    };
  }
  // If user exists connect to facebook
  const isConnectUser = await connectUserToProvider(context, {
    email, provider: args.provider,
    url: args.url as string,
    providerId: args.providerId as string,
  });
  if (isConnectUser) return isConnectUser;

  data = await context.prisma.users.create({
    data: {
      name: args.name || '',
      email,
      password,
      role_id: role.id,
      social_providers: {
        create: {
          provider: args.provider,
          url_register: args.url as string,
          provider_id: args.providerId as string,
        },
      },
    },
  });

  await sendPostmarkSignupEmail(data);

  token = jwt.sign(jwtSign(data), APP_SECRET);
  return {
    token,
    user: data,
  };

};