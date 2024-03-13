"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
//Define route handler for the home page
router.get('/', function (req, res) {
    //Simple html response
    res.send('<h1>Hello welcome to building this project');
});
module.exports = router
