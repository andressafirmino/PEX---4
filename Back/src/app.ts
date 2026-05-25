import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import path from 'path';
import cors from 'cors';
import { handleApplicationErrors } from '@/middlewares';
import {  adminRouter, productsRouter} from '@/routers';
import { connectDb, disconnectDB } from '@/config';


const app = express();
app
  .use(cors())
  .use(express.json())
  .use('/images', express.static(path.join(process.cwd(), 'public', 'images')))
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/products', productsRouter)
  .use('/users', adminRouter)

  .use(handleApplicationErrors);
  
export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
