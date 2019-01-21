import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';

import indexRoutes from './routes/IndexRoutes';
import hotelRoutes from './routes/HotelsRoutes';

class Server{

    public app:express.Application;

  constructor(){
    this.app = express();
    this.config();
    this.routes();
  }

  config(){
    const MONGO_HOST = "mongodb+srv://mongouser:af8zdKFhtaZ3kv2E@mongocloud-pajg1.mongodb.net/almundo?retryWrites=true";
    mongoose.set('useFindAndModify', true);
    mongoose.connect(process.env.MONGO_HOST || MONGO_HOST,{
      useNewUrlParser:true,
      useCreateIndex:true
    }).then(db => console.log('Base de datos conectada :)'));
    //configuración del puerto
    this.app.set('port', process.env.PORT || 3000);
    //Middlewares
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));  //permitir peticiones desde formularios
    this.app.use(compression());                          //reducir el peso de la respuesta
    this.app.use(cors());                                 //permitir conexiones desde fuera
  }

  routes(){
    this.app.use(indexRoutes);
    this.app.use('/api',hotelRoutes);
  }

  start(){
    this.app.listen(this.app.get('port'), ()=>{
      console.log('Servidor on:', this.app.get('port'));
    });

  }

}

const server = new Server();
server.start();
