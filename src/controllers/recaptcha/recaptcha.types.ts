import fs from 'fs';
import path from 'path';

export const recaptchaTypeDefs = fs.readFileSync(path.join(__dirname, 'recaptcha.queries.graphql'), 'utf8');


export type GoogleRecaptcha = {
  token: string;
  email: string;
}

export type GoogleRecaptchaPayload = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  action: string;
}

export type RecaptchaArgs = {
  email?:string;
  token?:string;
}