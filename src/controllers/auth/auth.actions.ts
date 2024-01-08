import axios, { AxiosError } from 'axios';
import { GoogleUser } from './auth.types';
import { users } from '../../generated/client';

export const jwtSign = (user: users) => ({ userId: user.id, email: user.email });

export const getGoogleUserInfo = async (token: string): Promise<GoogleUser | undefined> => {
  let response;
  try {
    response = await axios.get<GoogleUser | undefined>(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
    );
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.error.message);
    }
  }

  return response?.data;
};
