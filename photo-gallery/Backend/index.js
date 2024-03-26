"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var homeRouter_1 = require("./routes/homeRouter");
var mongoose_1 = require("mongoose");
var galleryRouter_1 = require("./routes/galleryRouter");
var dotenv_1 = require("dotenv");
//loading enviroment variables 
var app = express_1();
dotenv_1.config();
//MongoDB connection
var mongodbUri = process.env.MONGOURI;
if (!mongodbUri) {
    console.error('MongoDB connnection is not defined');
    process.exit(1);
}
mongoose_1.default.connect('mongodb://RamoswaneReabetswe:Reabetswe1@Madileng@localhost:27017/photo_gallery_db', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose_1.default.connection;
//Event handling for mongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
db.on('disconnected', function () {
    console.log('MongoDB disconnected');
});
//Routes
app.use('/', homeRouter_1.default);
app.use('/gallery', galleryRouter_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is runnning on port ".concat(PORT));
});
