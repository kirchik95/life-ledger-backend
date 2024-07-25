import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import 'module-alias/register';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;
const DB = process.env.DATABASE || '';

mongoose.connect(DB);

app.use(express.json());

app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`));
