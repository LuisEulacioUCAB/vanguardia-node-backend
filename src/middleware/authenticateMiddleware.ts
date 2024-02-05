import jwt, { JwtPayload } from 'jsonwebtoken';
import { APP_SECRET } from '../utils/constants';
import { Request } from 'express';

type TokenPayload = JwtPayload & { userId: string };
const getTokenPayload = (token: string): TokenPayload => {
  return jwt.verify(token, APP_SECRET) as TokenPayload;
};

export const authenticateMiddleware = (req: Request) => {
  if (req) {
    const authHeader = req.headers.authorization;
    console.log('authHeader',authHeader);
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = getTokenPayload(token);

      return parseInt(userId);
    }
  }

  throw new Error('Not authenticated');
};


