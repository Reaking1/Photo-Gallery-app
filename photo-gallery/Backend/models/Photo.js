"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoModel = void 0;
var mongoose_1 = require("mongoose");
var photoSchema = new mongoose_1.default.Schema({
    title: String,
    imageUrl: String
});
//Create and export PhotoModel
exports.PhotoModel = mongoose_1.default.model('Photo', photoSchema);
