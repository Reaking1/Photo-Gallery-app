"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var homeRouter = require("./routes/homeRouter");
var app = express();
app.use('/', homeRouter);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is runnning on port ".concat(PORT));
});
