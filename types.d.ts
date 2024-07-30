import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    export interface Request {
      user?: { id: string | jwt.JwtPayload };
    }

    export interface Response {
      user?: { id: string | jwt.JwtPayload };
    }
  }
}
