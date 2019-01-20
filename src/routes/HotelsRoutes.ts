import { Request, Response, Router } from 'express';

class HotelRoutes{

  router: Router;

    constructor(){
      this.router = Router();
      this.routes();
    }


    getHotels(req: Request, res: Response){
      res.send('Listado de hoteles');
    }

    getHotel(){

    }

    createHotel(){

    }

    updateHotel(){

    }

    deleteHotel(){

    }


    routes(){
      this.router.get('/hotels', this.getHotels);
    }

}

const hotelRoutes = new HotelRoutes();
export default hotelRoutes.router;
