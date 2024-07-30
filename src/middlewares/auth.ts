import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || '';

interface AuthRequest extends Request {
  user?: { id: string | jwt.JwtPayload };
}

const auth = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'No token, authorization denied' });

    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { user: { id: string } };

    req.user = { id: decoded.user.id };

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default auth;
