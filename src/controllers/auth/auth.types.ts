import fs from 'fs';
import path from 'path';
import { $Enums, users } from '../../generated/client';
import social_providers = $Enums.social_providers;

export const authTypeDefs = fs.readFileSync(path.join(__dirname, 'auth.queries.graphql'), 'utf8');

export type LoginArgs = {
  email: string;
  password: string;
};

export type SignupArgs = {
  email: string;
  password: string;
  name: string;
  url: string;
};

export type UserPayload = {
  token: string;
  user: users
}


export type SignupWithGoogleArgs = {
  token: string;
  url: string;
}

export type FacebookSignupArgs = {
  token: string;
  url: string;
}

export type AppleSignupArgs = {
  token: string;
  url: string;
}


export type ForgotPasswordArgs = {
  email: string;
  redirectUrl: string;
  form: string;
}

export type ForgotPasswordPayload = {
  success: boolean
}

export type ChangePasswordArgs = {
  email: string;
  password: string;
  token: string;
}



export type FacebookInfoUserPayload = {
  id?: string;
  name?: string;
  email?: string;
  picture?: {
    data?: {
      url?: string;
    };
  };
}

export type GoogleInfoUserPayload = {
  sub?: string;
  id?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  email?: string;
  email_verified?: boolean;
}

export type FetchUserProviderArgs = {
  providerId?: string;
  provider: social_providers
}

export type FetchUserProviderByEmail = {
  email?: string;
  provider: social_providers;
  providerId?: string;

}

export type CreateOrUpdateUserProvider = {
  email?: string;
  provider: social_providers;
  providerId?: string;
  url?: string;
  name?: string;
}

export type ConnectUserToProvider = {
  email: string;
  provider: social_providers;
  providerId: string;
  url: string;
}

export type TokenDecoded = {
  email?: string;
  aud?: string;
  sub?: string;
}