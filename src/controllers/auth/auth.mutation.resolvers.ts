import bcrypt from 'bcrypt';
import { ContextResolver } from '../../utils/types';
import jwt from 'jsonwebtoken';
import { APP_SECRET, APPLE_CLIENT_ID } from '../../utils/constants';
import {
  AppleSignupArgs,
  ChangePasswordArgs, FacebookSignupArgs,
  ForgotPasswordArgs,
  ForgotPasswordPayload,
  LoginArgs,
  SignupArgs,
  SignupWithGoogleArgs, TokenDecoded,
  UserPayload,
} from './auth.types';
import { PrismaClient, roles, users, Prisma } from '../../generated/client';
import {
  createOrConnectUserProvider,
  fetchUserProvider,
  fetchUserProviderByEmail,
  getFacebookUserInfo,
  getGoogleUserInfo,
  jwtSign,
} from './auth.actions';
import { social_providers } from '../../generated/client';
import {
  sendPostmarkChangePassword,
  sendPostmarkForgotPassword,
  sendPostmarkSignupEmail,
} from '../postmark/postmark.actions';
import crypto from 'crypto';
import moment from 'moment';
import { jwtDecode } from 'jwt-decode';

const prisma = new PrismaClient();
/**
 * Sign up user.
 *
 * @param {any}parent - Any params.
 * @param {SignupArgs}args - Sign up args.
 * @param {ContextResolver}context - Prisma Resolver.
 * @returns {UserPayload} - Return payload data.
 */
const signup = async (parent: any, args: SignupArgs, context: ContextResolver): Promise<UserPayload> => {
  const password = await bcrypt.hash(args.password, 10);
  const role = await context.prisma.user_roles.findFirst({ where: { name: roles.USER } });
  if (!role) throw new Error('No hay rol de usuario dentro del sistema');
  let user;

  try {
    user = await context.prisma.users.create({
      data: {
        name: args.name,
        email: args.email,
        password, role_id: role.id, social_providers: {
          create: {
            url_register: args.url,
            provider: social_providers.SYSTEM,
          },
        },
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error('El usuario ya se encuentra registrado');
    }

    throw e;
  }

  if (!user) throw Error('Tenemos problemas para crear el usuario');

  await sendPostmarkSignupEmail(user);
  const token = jwt.sign(jwtSign(user), APP_SECRET);

  return {
    token,
    user,
  };
};

/**
 * Login user.
 *
 * @param {any}parent - Any params.
 * @param {LoginArgs}args - Sign up args.
 * @param {ContextResolver}context - Prisma Resolver.
 * @returns {UserPayload} - Return payload data.
 */
const login = async (parent: any, args: LoginArgs, context: ContextResolver): Promise<UserPayload> => {
  const user = await context.prisma.users.findUnique({ where: { email: args.email } });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const valid = await bcrypt.compare(args.password, user.password);

  if (!valid) {
    throw new Error('Contraseña invalida');
  }

  const token = jwt.sign(jwtSign(user), APP_SECRET);

  return {
    token,
    user,
  };
};

/**
 * Google signup user.
 *
 * @param {any}parent - Any params.
 * @param {SignupWithGoogleArgs}args - Sign up google args.
 * @param {ContextResolver}context - Prisma Resolver.
 * @returns {UserPayload} - Return payload data.
 */
const googleSignup = async (
  parent: any,
  args: SignupWithGoogleArgs,
  context: ContextResolver,
): Promise<UserPayload | undefined> => {


  const googleUser = await getGoogleUserInfo(args.token);

  if (!googleUser) throw new Error('Usuario google no existe');

  const user = await fetchUserProvider(context, { providerId: googleUser.id, provider: social_providers.GOOGLE });

  return await createOrConnectUserProvider(context, user as users, {
    provider: social_providers.GOOGLE,
    providerId: googleUser.id,
    email: googleUser.email as string,
    name: googleUser.name as string,
    url: args.url,
  });
};

/**
 * Forgot password user.
 *
 * @param {any}parent - Any params.
 * @param {ForgotPasswordArgs}args - Forgot password args.
 * @param {ContextResolver}context - Prisma Resolver.
 * @returns {ForgotPasswordPayload} - Return payload data.
 */
const forgotPassword = async (
  parent: any,
  args: ForgotPasswordArgs,
  context: ContextResolver,
): Promise<ForgotPasswordPayload> => {
  const { email } = args;
  const user = await context.prisma.users.findUnique({ where: { email } });
  if (!user) throw Error('El correo ingresado no existe');

  const token = crypto.randomBytes(64).toString('hex');

  await context.prisma.password_reset.create({
    data: {
      token,
      email,
      expired_at: moment().add(2, 'days').toDate(),
    },
  });

  try {
    await sendPostmarkForgotPassword(args, token);
  } catch (e) {
    return {
      success: false,
    };
  }


  return {
    success: true,
  };
};

/**
 * Change password user.
 *
 * @param {any}parent - Any params.
 * @param {ChangePasswordArgs}args - Change  password args.
 * @param {ContextResolver}context - Prisma Resolver.
 * @returns {users} - Return payload data.
 */
export const changePassword = async (
  parent: any,
  args: ChangePasswordArgs,
  context: ContextResolver,
): Promise<UserPayload> => {

  const { email, password, token } = args;

  let user;

  const passwordReset = await prisma.password_reset.findFirst({
    where: {
      token: token as string,
    },
  });

  if (!passwordReset) throw new Error('El token es incorrecto');

  const isActive = moment().isBetween(moment(passwordReset?.created_at), moment(passwordReset?.expired_at));

  if (!isActive) throw new Error('El token es expirado');

  console.log('email', decodeURIComponent(email));

  try {
    user = await context.prisma.users.update({
      data: {
        password: await bcrypt.hash(password as string, 10),
      },
      where: {
        email: decodeURIComponent(email),
      },
    });

    await sendPostmarkChangePassword(user);

    await context.prisma.password_reset.update({
      data: {
        expired_at: moment().toDate(),
      },
      where: {
        id: passwordReset.id,
      },
    });
  } catch (e) {
    throw new Error('Error to update user');
  }
  const authToken = jwt.sign(jwtSign(user), APP_SECRET);
  return {
    token: authToken,
    user,
  };
};


/**
 * Facebook signup user.
 *
 * @param {any}parent - Any params.
 * @param {FacebookSignupArgs}args - Sign up facebook args.
 * @param {ContextResolver}context - Prisma Resolver.
 * @returns {UserPayload} - Return payload data.
 */
const facebookSignup = async (
  parent: any,
  args: FacebookSignupArgs,
  context: ContextResolver,
): Promise<UserPayload | undefined> => {

  let user;


  const facebookUser = await getFacebookUserInfo(args.token);
  if (!facebookUser) throw new Error('Usuario facebook no existe');


  if (facebookUser?.email) {

    user = await fetchUserProviderByEmail(
      context, {
        providerId: facebookUser.id,
        provider: social_providers.FACEBOOK,
        email: facebookUser?.email as string,
      });

    return await createOrConnectUserProvider(context, user as users, {
      provider: social_providers.FACEBOOK,
      providerId: facebookUser.id,
      email: facebookUser.email as string,
      name: facebookUser.name as string,
      url: args.url,
    });


  } else {

    user = await fetchUserProvider(context, { providerId: facebookUser.id, provider: social_providers.FACEBOOK });

    return await createOrConnectUserProvider(context, user as users, {
      provider: social_providers.FACEBOOK,
      providerId: facebookUser.id,
      name: facebookUser.name as string,
      url: args.url,
    });
  }
};

const appleSignup = async (
  parent: any,
  args: AppleSignupArgs,
  context: ContextResolver) => {

  const tokenDecoded: TokenDecoded = jwtDecode(
    args.token,
  );

  if (!(tokenDecoded.aud && tokenDecoded.aud === APPLE_CLIENT_ID)) throw Error('Tenemos problemas para iniciar sesión con apple.');

  const user = await fetchUserProvider(context, { providerId: tokenDecoded.sub, provider: social_providers.APPLE });

  return await createOrConnectUserProvider(context, user as users, {
    provider: social_providers.APPLE,
    providerId: tokenDecoded.sub,
    email: tokenDecoded.email as string,
    url: args.url,
  });

};

export const authMutationResolvers = {
  signup,
  googleSignup,
  facebookSignup,
  appleSignup,
  login,
  forgotPassword,
  changePassword,
};
