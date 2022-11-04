import express from 'express';
import cors from 'cors';
import connect from './src/db';
import { routes } from './src/routes';
export const app =  express()
connect();
app.use(cors());
app.use(express.json())
routes(app);

