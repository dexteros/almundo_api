import { Schema, model} from 'mongoose';

 const HotelSchema = new Schema({
   name: {type:String, required:true},                      //Nombre del hotel
   stars: {type:Number, required:false, min: 0, max: 5},    //Categoria del hotel
   address: {type:String, required:true},                   //Direccion del hotel
   images: [String],                                        //Url de las imagenes
   price: {type: Number, required:true},                    //Precio x noche
   createAt: { type: Date, default: Date.now },             //Fecha de creación
   updateAt: Date,                                          //Fecha de modificación
   active: {type: Boolean, default: true},                  //Estado activo o inactivo
   location:{                                               //Coordenadas Google Maps
     lat:{type:Number},
     long:{type:Number}
   }
 });

 export default model('Hotel', HotelSchema);
