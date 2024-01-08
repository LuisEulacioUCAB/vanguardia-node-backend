import bcrypt from 'bcrypt';
import { ContextResolver } from '../../utils/types';
import jwt from 'jsonwebtoken';
import { APP_SECRET } from '../../utils/constants';
import { Login, Signup } from './auth.types';
import { roles } from '../../generated/client';
import { getGoogleUserInfo, jwtSign } from './auth.actions';

const signup = async (parent: any, args: Signup, context: ContextResolver) => {
  const password = await bcrypt.hash(args.password, 10);
  const role = await context.prisma.user_roles.findFirst({ where: { name: roles.USER } });
  if (!role) throw new Error('Roles is not assigned');

  const user = await context.prisma.users.create({ data: { ...args, password, role_id: role.id } });
  const token = jwt.sign(jwtSign(user), APP_SECRET);

  return {
    token,
    user,
  };
};

const login = async (parent: any, args: Login, context: ContextResolver) => {
  const user = await context.prisma.users.findUnique({ where: { email: args.email } });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(args.password, user.password);

  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign(jwtSign(user), APP_SECRET);

  return {
    token,
    user,
  };
};

const signupWithGoogle = async (
  parent: any,
  args: {
    token: string;
  },
  context: ContextResolver,
) => {
  let token;
  let user;

  const googleUser = await getGoogleUserInfo(args.token);

  if (!googleUser) throw new Error('Google user dont exists');

  user = await context.prisma.users.findUnique({ where: { email: googleUser?.email } });

  if (user) {
    token = jwt.sign(jwtSign(user), APP_SECRET);
    return {
      token,
      user,
    };
  }

  const password = await bcrypt.hash('Vanguardia/%%2024', 10);
  const role = await context.prisma.user_roles.findFirst({ where: { name: roles.USER } });

  if (!role) throw new Error('Roles is not assigned');

  user = await context.prisma.users.create({
    data: {
      name: googleUser.name,
      email: googleUser.email,
      password,
      role_id: role.id,
    },
  });

  token = jwt.sign(jwtSign(user), APP_SECRET);

  return {
    token,
    user,
  };
};

export const authMutationResolvers = {
  signup,
  login,
  signupWithGoogle,
};
