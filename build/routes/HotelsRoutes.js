"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class HotelRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getHotels(req, res) {
        res.send('Listado de hoteles');
    }
    getHotel() {
    }
    createHotel() {
    }
    updateHotel() {
    }
    deleteHotel() {
    }
    routes() {
        this.router.get('/hotels', this.getHotels);
    }
}
const hotelRoutes = new HotelRoutes();
exports.default = hotelRoutes.router;
