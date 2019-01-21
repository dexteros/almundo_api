# Almundo API Hotels (test)

API REST desarrollada en Typescript corriendo bajo Node JS implementando Express y Mongo DB. Se incluyen caracteristicas básicas como Listar, Crear, Modificar y Eliminar Hoteles.

#### Deploy:
  - API en entorno de producción consultar en: https://almundo-ws.herokuapp.com/

#### Endpoints:
Método | URL | Funcionalidad
------------ | ------------- | ---------------
GET | /api/hotels | Retorna una lista de hoteles.
GET | /api/hotels/:id | Retorna el hotel del parametro :id
POST | /api/hotels | Crea un hotel en la base de datos y retorna el hotel creado.
PUT | /api/hotels/:id | Actualiza los datos del hotel según el parametro :id y retorna el hotel modificado.
DELETE | /api/hotels | Elimina el hotel según el parametro :id y retorna el hotel eliminado.

#### Modelo de datos:
```
{
    name: {type:String, required:true},                     
    stars: {type:Number, required:false, min: 0, max: 5},   
    address: {type:String, required:true},                  
    images: [String],                                        
    price: {type: Number, required:true},                    
    createAt: { type: Date, default: Date.now },             
    updateAt: Date,                                          
    active: {type: Boolean, default: true},                  
    location:
        {
            lat:{type:Number},
            long:{type:Number}
        }
}
```

### Repositorio GitHub:
 * ##### [https://github.com/dexteros/almundo_api](https://github.com/dexteros/almundo_api)


### Instalación

Requerimientos [Node.js](https://nodejs.org/) v8+ 

1) Clonar el repositorio
```sh
$ git clone https://github.com/dexteros/almundo_api.git
```
2) Instalar dependencias
```sh
$ cd almundo_api
$ npm install
```
3) Compilar a Javascript: comando tsc en la raiz del proyecto
```
$ tsc
```
4) Los archivos compilados se alojan en la carbeta "build"

```sh
$ npm run start
```

**Desarrollado por: Juan Manuel Lora**


