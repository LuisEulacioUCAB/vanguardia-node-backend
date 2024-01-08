import { PrismaClient } from '../generated/client';

export type ContextResolver = {
  prisma: PrismaClient;
};
