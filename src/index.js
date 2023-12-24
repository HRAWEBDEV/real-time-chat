import express from 'express';
import { createServer } from 'http';
import 'express-async-errors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { notFoundMiddleware } from './middlewares/notFound.js';
import { Server } from 'socket.io';

dotenv.config();
const app = express();
const server = createServer(app);
// * socket io setup
const io = new Server(server);
// * basic middlewares setup
process.env.ENVIROMENT == 'DEVELOPMENT' && app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

// * api base route
const apiBaseRoute = '/api/v1';

// * socket io connections
io.on('connection', (soket) => {
 console.log(soket);
 console.log('user connected');
 soket.on('disconnet', () => {
  console.log('user disconnected');
 });
 soket.on('chat message', (e) => {
  console.log('chat begin', e);
 });
});
// * advanced middlewares
app.all('*', notFoundMiddleware);
// * server initialization
const serverPort = process.env.PORT;
server.listen(serverPort, () => {
 console.log(`server is listening to port:${serverPort}`);
});
