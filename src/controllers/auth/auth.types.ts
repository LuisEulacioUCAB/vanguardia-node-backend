import fs from 'fs';
import path from 'path';

export const authTypeDefs = fs.readFileSync(path.join(__dirname, 'auth.queries.graphql'), 'utf8');

export type Login = {
  email: string;
  password: string;
};

export type Signup = {
  email: string;
  password: string;
  name: string;
};

export type GoogleUser = {
  id: string;
  email: string;
  name: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  verified_email?: boolean;
};
