import cheerio from "cheerio";
import got from "got";
import fs from "fs";
import * as Console from "console";

// const cheerio = require("cheerio");
// const got = require("got");

const lotteryURL = "https://flalottery.com/exptkt/l6.htm";
const numsPerPlay = 6;

let wordArray = [];
let resultsArray = [];
let intArray = [];
let numOfRows;
let resultArrayJson;

function create2dArray(rows, columns, numArr) {
    let twoDimArray = [];
    let numsArrayIndex = 0;

    for(let i = 0; i < rows; i++) {
        twoDimArray.push([]);

        twoDimArray[i].push(new Array(columns));

        for(let j = 0; j < columns; j++) {
            if(numsArrayIndex < numArr.length) {
                twoDimArray[i][j] = numArr[numsArrayIndex];
                numsArrayIndex++;
            }

        }
    }
    return twoDimArray;
}

let wordsArrayPromise = new Promise(function(resolve, reject) {
    let test = true;

    if(test) {
        resolve(
            got(lotteryURL).then(response => {
                // var wordArray = [];

                const pattern = new RegExp('[0-9]+-');
                const patternSec = new RegExp('[0-9]+/')
                const $ = cheerio.load(response.body);
                // let htmlString = $.html('td');
                // wordArray = Array.from(htmlString.split(' '));

                // response.body contained in the $ constant is filtered by 'td' and converted to text. The numbers followed by - or / will be replaced so when the
                // intArray is populated, those numbers are not included as lottery results.
                $('td').each((index, element) => {
                    wordArray.push($(element).text().replace(pattern, 'NaN').replace(patternSec, 'NaN'));
                });
                // console.log(wordArray);

            }).catch(err => {
                console.log(err);
            })
        );
    } else {
        reject("promise did not work");
    }
});

let createResultsArray = function (arrayWithWords) {
    new Promise(function (resolve, reject) {
        let test = true;

        if (test) {
            resolve(
                arrayWithWords.forEach(element => {
                    if (!isNaN(parseInt(element))) {
                        intArray.push(parseInt(element));
                    }
                }),

                numOfRows = intArray.length / numsPerPlay,

                resultsArray = create2dArray(numOfRows, numsPerPlay, intArray),
            );
        } else {
            reject("second promise did not work");
        }
    }).then();
}

function createJsonFile() {
    wordsArrayPromise.then(() => {
        createResultsArray(wordArray);
        resultArrayJson = JSON.stringify(resultsArray);

        fs.writeFile("data.json", resultArrayJson, function (err) {
            console.log(err ? 'Error :' + err : 'File created')
        });
    });
    return resultArrayJson;
}

export {createJsonFile, resultsArray};


