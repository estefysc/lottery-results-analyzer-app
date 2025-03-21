// Brings in the ability to create the 'require' method.
import {createRequire} from "module";
import {evenAndOddPercentageCalculator, getSixMostRepeatedNumbers} from "./calculations.js";

const require = createRequire(import.meta.url);

let evenOddData;

// Obtains the data from the lottery website.
let getNumberData = () => {
    // evenOddData = evenAndOddPercentageCalculator();
    if (!evenOddData) {
        evenOddData = evenAndOddPercentageCalculator();
    }
    return evenOddData;
}

// Obtains the six most repeated numbers and its frequencies.
let getMostRepeated = () => {
    // return {
    //     freqNums: getSixMostRepeatedNumbers(evenOddData.numbersMap) 
    // };
    return {
        freqNums: getSixMostRepeatedNumbers(getNumberData().numbersMap) 
    };
}

let getEvenOddData = () => {
    // return evenOddData;
    if (!evenOddData) {
        evenOddData = evenAndOddPercentageCalculator();
    }
    return evenOddData;
}

let getAllNumsData = () => {
    return {
        numbersMap: getNumberData().numbersMap
    };
}

export {getMostRepeated, getNumberData, getEvenOddData, getAllNumsData};