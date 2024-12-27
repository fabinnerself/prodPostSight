import express, { Router } from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from '../middlewares';

require('dotenv').config();

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    this.port = options.port;
    this.routes = options.routes;
  }

  async start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(cors());
    
    this.app.use(this.routes);

    this.app.use(middlewares.notFound)    
    this.app.use(middlewares.errorHandler)    

    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port} 🎄🤶`);
    });
  }
}
