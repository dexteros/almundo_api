import {Request, Response, Router} from 'express';
import path from 'path';

class IndexRoutes{

  router: Router;

  constructor(){
      this.router = Router();
      this.routes();
  }

  routes(){
    this.router.get('/', (req, res)=>res.sendFile(path.join(__dirname + '/index.html')));
  }

}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;
