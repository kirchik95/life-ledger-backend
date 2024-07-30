import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import User, { UserDocument } from '@models/User';

interface AuthRequest extends Request {
  user?: { id: string | jwt.JwtPayload };
  currentUser?: UserDocument;
}
const checkUser = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.user?.id;

    if (!id) {
      res.status(401).json({ message: 'User ID not found in token' });
      return;
    }

    const user: UserDocument | null = await User.findById(id).select('-password');

    if (!user) {
      res.status(404).json({ message: 'User not found' });

      return;
    }

    req.currentUser = user;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error checking user', error });
  }
};

export default checkUser;
