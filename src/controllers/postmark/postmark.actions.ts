import { ForgotPasswordArgs } from '../auth/auth.types';

const postmark = require('postmark');
import { BACKEND_URL, POSTMARK_FROM_EMAIL, POSTMARK_TOKEN } from '../../utils/constants';
import { users } from '../../generated/client';

export const postmarkClient = new postmark.ServerClient(POSTMARK_TOKEN);


export const sendPostmarkSignupEmail = async (user: users) => {
  let response;
  try {
    response = await postmarkClient.sendEmailWithTemplate({
      TemplateAlias: 'bienvenido',
      From: POSTMARK_FROM_EMAIL,
      To: user.email,
      TemplateModel: { email: user.email },
    });
  } catch (e) {
    throw new Error('Error to sending sign up email');
  }


  return response;
};

export const sendPostmarkForgotPassword = async (data: ForgotPasswordArgs, token: string) => {
  let response;
  try {
    response = await postmarkClient.sendEmailWithTemplate({
      TemplateAlias: 'reset-password',
      From: POSTMARK_FROM_EMAIL,
      To: data.email,
      TemplateModel: { url: `${BACKEND_URL}/auth/password-reset?token=${token}&redirect_url=${data.redirectUrl}&form=${data.form}` },
    });
  } catch (e) {
    throw new Error('Error to sending forgot password');
  }
  return response;
};

export const sendPostmarkChangePassword = async (user: users) => {
  let response;
  try {
    response = await postmarkClient.sendEmailWithTemplate({
      TemplateAlias: 'confirmar',
      From: POSTMARK_FROM_EMAIL,
      To: user.email,
      TemplateModel: { email: user.email },
    });
  } catch (e) {
    throw new Error('Error to sending change password');
  }

  return response;
};