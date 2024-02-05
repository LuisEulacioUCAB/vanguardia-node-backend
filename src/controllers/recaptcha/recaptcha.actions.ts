import axios, { AxiosError } from 'axios';
import { GOOGLE_RECAPTCHA_SECRET } from '../../utils/constants';
import { GoogleRecaptchaPayload } from './recaptcha.types';


export const checkRecaptcha = async (token: string): Promise<GoogleRecaptchaPayload> => {
  let response;
  try {
    response = await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_RECAPTCHA_SECRET}&response=${token}`);
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log('e', e.response);
    }
    throw Error('Check captcha error');
  }

  return response?.data;
};