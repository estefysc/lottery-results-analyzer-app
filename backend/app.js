// const express = require("express");
// const Quote = require('inspirational-quotes');
// const Parser = require('./Parser');

import express from "express";
import getSetOFSix from "./index.js";
import {createJsonFile} from "./parser.js";
import {evenAndOddCalculator, evenAndOddPercentageCalculator, getSixMostRepeatedNumbers} from "./calculations.js";

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

// Currently being used to test the backend.
app.get("/", function(req, res){
    res.send(getSetOFSix());
    evenAndOddCalculator();
    evenAndOddPercentageCalculator();
    getSixMostRepeatedNumbers();
});

// Connects to the lottery website and parses the data when the server is started.
app.listen(port, function() {
    console.log("Server started successfully");
    console.log("Creating JSON file...");
    createJsonFile();
});
