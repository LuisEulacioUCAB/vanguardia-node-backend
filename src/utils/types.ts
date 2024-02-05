import { PrismaClient } from '../generated/client';

export type ContextResolver = {
  prisma: PrismaClient;
  userId: number | null
};

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;