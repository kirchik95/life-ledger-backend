import { Request, Response } from 'express';

import User, { UserDocument } from '@models/User';

export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: UserDocument | null = await User.findById(req.user?.id).select('-password');

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error', error });
  }
};

export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, age } = req.body;

    const user: UserDocument | null = await User.findById(req.user?.id);

    if (user) {
      if (name) user.name = name;
      if (email) user.email = email;
      if (age) user.age = age;

      await user.save();

      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
};
