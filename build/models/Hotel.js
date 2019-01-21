"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const HotelSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    stars: { type: Number, required: false, min: 0, max: 5 },
    address: { type: String, required: true },
    images: [String],
    price: { type: Number, required: true },
    createAt: { type: Date, default: Date.now },
    updateAt: Date,
    active: { type: Boolean, default: true },
    location: {
        lat: { type: Number },
        long: { type: Number }
    }
});
exports.default = mongoose_1.model('Hotel', HotelSchema);
