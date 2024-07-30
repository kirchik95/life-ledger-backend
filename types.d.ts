import jwt from 'jsonwebtoken';

import { UserDocument } from '@models/User';

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

declare module 'express-serve-static-core' {
  interface Request {
    currentUser?: UserDocument;
  }
}
