import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';

import auth from '@middlewares/auth';
import checkUser from '@middlewares/checkUser';

import authRoutes from '@routes/authRoutes';
import profileRoutes from '@routes/profileRoutes';
import userRoutes from '@routes/userRoutes';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;
const DB = process.env.DATABASE || '';

mongoose
  .connect(DB)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/profile', [auth, checkUser], profileRoutes);
app.use('/api/users', auth, userRoutes);

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
