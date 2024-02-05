import { InputMaybe, Scalars } from '../../utils/types';
import { $Enums, users } from '../../generated/client';
import fs from 'fs';
import path from 'path';
import social_providers = $Enums.social_providers;

export const userTypeDefs = fs.readFileSync(path.join(__dirname, 'user.queries.graphql'), 'utf8');

export type UpdateUserArgs = {
  data: {
    file: InputMaybe<Scalars['Upload']>;
    user: users
  }
}

export type UsersArgs = {
  where: {
    created_at: {
      lte: string;
      gte: string;
    },
    name:{
      contains:string
    }
  },
  limit: number;
  skip: number;
}

export type UserProvidersArgs = {
  where: {
    created_at: {
      lte: string;
      gte: string;
    },
    provider: social_providers
  },
  limit: number
}