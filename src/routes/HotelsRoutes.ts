import { Request, Response, Router } from 'express';
import Hotel from '../models/Hotel';
import { ObjectId } from 'mongodb';

class HotelRoutes{

  router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  async getHotels(req: Request, res: Response){
    const hotels = await Hotel.find();
    res.json({"hotels":hotels});
  }


  async getHotel(req: Request, res: Response){

    try{
      //Validación número hexadecimal de 24 caracteres
      if(ObjectId.isValid(req.params.id)){
        const hotel = await Hotel.findById({_id: req.params.id});
        res.json({"hotels":hotel});
      }else{
        res.json({"hotels":null});
      }

    }catch(e){
      res.json({"hotels":null});
    }
  }

  async createHotel(req:Request, res:Response){
    const { name, stars, address, images, price, createAt, updateAt, active, location } = req.body;
    const newHotel = new Hotel({name, stars, address, images, price, createAt, updateAt, active, location});
    //console.log(newHotel);
    await newHotel.save();
    res.json(newHotel);
  }

  async updateHotel(req:Request, res:Response){

    if(ObjectId.isValid(req.params.id)){
      const hotel = await Hotel.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true});
      res.json({"hotels":hotel});
    }else{
      res.json({"hotels":null});
    }
  }

  async deleteHotel(req:Request, res:Response){
    if(ObjectId.isValid(req.params.id)){
      const hotel = await Hotel.findByIdAndDelete({_id:req.params.id});
      res.json({"hotels":hotel});
    }else{
      res.json({"hotels":null});
    }
  }


  routes(){
    this.router.get('/hotels', this.getHotels);           //retorna todos los hoteles
    this.router.get('/hotels/:id', this.getHotel);        //retorna el hotel del parametro :id
    this.router.post('/hotels', this.createHotel);        //crea un hotel
    this.router.put('/hotels/:id', this.updateHotel);     //actualiza un hotel segun :id
    this.router.delete('/hotels/:id', this.deleteHotel);  //borra un hotel segun el :id
  }

}

const hotelRoutes = new HotelRoutes();
export default hotelRoutes.router;
