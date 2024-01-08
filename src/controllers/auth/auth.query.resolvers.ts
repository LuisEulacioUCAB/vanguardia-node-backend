import { ContextResolver } from '../../utils/types';

const user = async (
  parent: any,
  args: {
    email: string;
  },
  context: ContextResolver,
) => {
  const user = await context.prisma.users.findUnique({ where: { email: args.email } });
  if (!user) {
    throw new Error('No such user found');
  }
  return {
    user,
  };
};

export const authQueryResolvers = {
  user,
};
