"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Hotel_1 = __importDefault(require("../models/Hotel"));
const mongodb_1 = require("mongodb");
class HotelRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getHotels(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hotels = yield Hotel_1.default.find();
            res.json({ "hotels": hotels });
        });
    }
    getHotel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Validación número hexadecimal de 24 caracteres
                if (mongodb_1.ObjectId.isValid(req.params.id)) {
                    const hotel = yield Hotel_1.default.findById({ _id: req.params.id });
                    res.json({ "hotels": hotel });
                }
                else {
                    res.json({ "hotels": null });
                }
            }
            catch (e) {
                res.json({ "hotels": null });
            }
        });
    }
    createHotel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, stars, address, images, price, createAt, updateAt, active, location } = req.body;
            const newHotel = new Hotel_1.default({ name, stars, address, images, price, createAt, updateAt, active, location });
            //console.log(newHotel);
            yield newHotel.save();
            res.json(newHotel);
        });
    }
    updateHotel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (mongodb_1.ObjectId.isValid(req.params.id)) {
                const hotel = yield Hotel_1.default.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
                res.json({ "hotels": hotel });
            }
            else {
                res.json({ "hotels": null });
            }
        });
    }
    deleteHotel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (mongodb_1.ObjectId.isValid(req.params.id)) {
                const hotel = yield Hotel_1.default.findByIdAndDelete({ _id: req.params.id });
                res.json({ "hotels": hotel });
            }
            else {
                res.json({ "hotels": null });
            }
        });
    }
    routes() {
        this.router.get('/hotels', this.getHotels); //retorna todos los hoteles
        this.router.get('/hotels/:id', this.getHotel); //retorna el hotel del parametro :id
        this.router.post('/hotels', this.createHotel); //crea un hotel
        this.router.put('/hotels/:id', this.updateHotel); //actualiza un hotel segun :id
        this.router.delete('/hotels/:id', this.deleteHotel); //borra un hotel segun el :id
    }
}
const hotelRoutes = new HotelRoutes();
exports.default = hotelRoutes.router;
