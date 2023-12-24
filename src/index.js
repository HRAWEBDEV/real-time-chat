import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { notFoundMiddleware } from './middlewares/notFound.js';

dotenv.config();
const app = express();

// * basic middlewares setup
process.env.ENVIROMENT == 'DEVELOPMENT' && app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

// * api base route
const apiBaseRoute = '/api/v1';
// * advanced middlewares
app.all('*', notFoundMiddleware);
// * server initialization
const serverPort = process.env.PORT;
app.listen(serverPort, () => {
 console.log(`server is listening to port:${serverPort}`);
});
