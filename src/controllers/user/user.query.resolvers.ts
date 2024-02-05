import { ContextResolver } from '../../utils/types';
import { UserProvidersArgs, UsersArgs } from './user.types';
import { Prisma } from '../../generated/client';
import usersFindManyArgs = Prisma.usersFindManyArgs;
import user_social_providersFindManyArgs = Prisma.user_social_providersFindManyArgs;

const currentUser = async (
  parent: any,
  args: any,
  context: ContextResolver,
) => {
  const id = context.userId || 0;

  if (!id) throw Error('Usuario sin autorización');

  const user = await context.prisma.users.findUnique({
    where: { id },
    include: { social_providers: true, role: true },
  });


  if (!user) {
    throw new Error('No such user found');
  }

  return user;
};


const users = async (
  parent: any,
  args: UsersArgs,
  context: ContextResolver,
) => {

  const id = context.userId || 0;

  if (!id) throw Error('Usuario sin autorización');

  let usersArgs: usersFindManyArgs = {
    include: {
      social_providers: true,
      role: true,
    },
    take: args.limit || 0,
    skip: args.skip || 0,
  };

  if (args.where && args.where.created_at) {
    usersArgs = {
      ...usersArgs,
      where: {
        created_at: {
          ...args.where.created_at,
        },
      },
    };
  }

  if (args.where && args.where.name) {
    console.log('args', args);
    usersArgs = {
      ...usersArgs,
      where: {
        created_at: {
          ...args.where.created_at,
        },
        OR: [
          {
            name: {
              ...args.where.name,
            },
          },
          {
            email: {
              ...args.where.name,
            },
          },
        ],
      },
    };
  }

  const users = await context.prisma.users.findMany(usersArgs);
  const count = await context.prisma.users.count();

  return {
    users,
    count,
  };
};


const userProviders = async (
  parent: any,
  args: UserProvidersArgs,
  context: ContextResolver,
) => {

  const id = context.userId || 0;

  if (!id) throw Error('Usuario sin autorización');
  let userProviderArgs: user_social_providersFindManyArgs = {
    take: args.limit || 0,
    include: {
      users: true,
    },
  };

  if (args.where && args.where.created_at) {
    userProviderArgs = {
      ...userProviderArgs,
      where: {
        created_at: {
          ...args.where.created_at,
        },
      },

    };
  }

  if (args.where && args.where.provider) {
    userProviderArgs = {
      ...userProviderArgs,
      where: {
        ...userProviderArgs.where,
        provider: args.where.provider,
      },
    };
  }

  const users = await context.prisma.user_social_providers.findMany(userProviderArgs);
  const count = await context.prisma.user_social_providers.count({
    where: {
      provider: args.where.provider,
    },
  });

  return {
    users,
    count,
  };
};


export const userQueryResolvers = {
  currentUser,
  users,
  userProviders,
};




