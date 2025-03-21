import express from "express";
import {getMostRepeated, getNumberData, getEvenOddData, getAllNumsData} from "./index.js";
import {createJsonFile} from "./parser.js";

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
    getNumberData();
});

app.get("/frequentNums", function(req, res) {
    res.send(getMostRepeated());
});

app.get("/evenOdd", function(req, res) {
   res.send(getEvenOddData());
});

app.get("/allNums", function(req, res) {
    res.send(getAllNumsData());
 });

// Connects to the lottery website and parses the data when the server is started.
// app.listen(port, function() {
//     console.log("Server started successfully");
//     console.log("Creating JSON file...");
//     createJsonFile();
// });

app.listen(port, function() {
    console.log("Server started successfully");
    console.log("Creating JSON file...");
    
    createJsonFile()
        .then(jsonData => {
            console.log("JSON file created successfully!");
            // Optionally do something with jsonData
        })
        .catch(error => {
            console.error("Failed to create JSON file:", error);
            // Optionally implement recovery or fallback behavior
        });
});
