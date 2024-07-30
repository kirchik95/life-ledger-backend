import User, { UserDocument } from '@models/User';
import { Request, Response } from 'express';

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: UserDocument[] = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: UserDocument | null = await User.findById(req.params.id);

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};
