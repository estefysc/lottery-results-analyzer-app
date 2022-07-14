// const express = require("express");
// const Quote = require('inspirational-quotes');
// const Parser = require('./Parser');

import express from "express";
import getSetOFSix from "./Index.js";
import Console from "console";
import createJsonFile from "./Parser.js";

const app = express();

let port = process.env.PORT;
if(port == null || port == "") {
    port = 5000;
}

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/", function(req, res){
    res.send(getSetOFSix());
});

app.listen(port, function() {
    console.log("Server started successfully");
    Console.log("Creating JSON file...");
    createJsonFile();
});

// execute a function imported from another file