// Brings in the ability to create the 'require' method.
import {createRequire} from "module";
import {evenAndOddPercentageCalculator, getSixMostRepeatedNumbers} from "./calculations.js";

const require = createRequire(import.meta.url);
const data = require("./data.json");

// Obtains the data from the lottery website.
let getNumberData = () => {
    evenAndOddPercentageCalculator();
}

// Obtains the six most repeated numbers.
let getMostRepeated = () => {
    return {
        freqNums: getSixMostRepeatedNumbers()
    };
}

// Obtains a set of six numbers randomly, which are the result of one lottery play, from the data.json file.
// let getSetOFSix = () => {
//     return {
//         setOfSix: data[Math.floor(Math.random() * data.length)]
//     };
// }

export {getMostRepeated, getNumberData};