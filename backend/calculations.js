import {resultsArray} from "./parser.js";

// If global variables are not used, then functions will execute more than one job.
const numbersInOnePlay = 6;

let globalTotalEvenNumbers = 0;
let globalTotalOddNumbers = 0;

let globalZeroEvenInSet = 0;
let globalOneEvenInSet = 0;
let globalTwoEvenInSet = 0;
let globalThreeEvenInSet = 0;
let globalFourEvenInSet = 0;
let globalFiveEvenInSet = 0;
let globalSixEvenInSet = 0;

// This function is used to calculate the amount of times even and odd numbers appear.
function evenAndOddCalculator() {
    let totalEvenNumbers = 0;
    let totalOddNumbers = 0;

    // let largestAmountEven = 0;
    // let largestAmountOdd = 0;

    let zeroEvenInSet = 0;
    let oneEvenInSet = 0;
    let twoEvenInSet = 0;
    let threeEvenInSet = 0;
    let fourEvenInSet = 0;
    let fiveEvenInSet = 0;
    let sixEvenInSet = 0;

    // todo: Can this be more efficient using a hashmap or its equivalent in JavaScript?
    for(let i = 0; i < resultsArray.length; ++i) {
        let evenCounter = 0;
        let oddCounter = 0;

        for(let j = 0; j < numbersInOnePlay; ++j) {
            // Checks if the number is even.
            if(resultsArray[i][j] % 2 === 0) {
                ++evenCounter;
                ++totalEvenNumbers;
            } else {
                ++oddCounter;
                ++totalOddNumbers;
            }

            // Is this information really necessary?
            // if(evenCounter >= largestAmountEven) {
            //     largestAmountEven = evenCounter;
            // }
            // if(oddCounter >= largestAmountOdd) {
            //     largestAmountOdd = oddCounter;
            // }
        } // End of j-variable for loop. Checks each numbers in each set of six, one play.

        // These switch statements are used to count the amount of sets with zero even, zero odd, one even, one odd, etc.
        switch (evenCounter) {
            case 1:
                ++oneEvenInSet;
                break;
            case 2:
                ++twoEvenInSet;
                break;
            case 3:
                ++threeEvenInSet;
                break;
            case 4:
                ++fourEvenInSet;
                break;
            case 5:
                ++fiveEvenInSet;
                break;
            case 6:
                ++sixEvenInSet;
                break;
            default:
                ++zeroEvenInSet;
                break;
        }

        console.log();
        console.log(`For this result: ${resultsArray[i]}`);
        console.log(`even = ${evenCounter}`);
        console.log(`odd = ${oddCounter}`);
    } // End of i-variable for loop. Checks each set of six.

    // Global variables are initialized to be used by other functions.
    // Global variables by themselves cannot be used because they won't be initialized to zero if the code is run again.
    globalTotalEvenNumbers = totalEvenNumbers;
    globalTotalOddNumbers = totalOddNumbers;

    globalZeroEvenInSet = zeroEvenInSet;
    globalOneEvenInSet = oneEvenInSet;
    globalTwoEvenInSet = twoEvenInSet;
    globalThreeEvenInSet = threeEvenInSet;
    globalFourEvenInSet = fourEvenInSet;
    globalFiveEvenInSet = fiveEvenInSet;
    globalSixEvenInSet = sixEvenInSet;

    // console.log();
    // console.log(`greatest amount of even numbers per set = ${largestAmountEven}`);
    // console.log(`greatest amount of odd numbers per set = ${largestAmountOdd}`);
} // End of evenAndOddCalculator function.

// Needs to be run after evenAndOddCalculator()
function evenAndOddPercentageCalculator() {
    let amountOfSets = resultsArray.length;

    let averageEven = globalTotalEvenNumbers / amountOfSets;
    let averageOdd = globalTotalOddNumbers / amountOfSets;

    let percentZeroEven = (globalZeroEvenInSet * 100.00) / amountOfSets;
    let percentOneEven = (globalOneEvenInSet * 100.00) / amountOfSets;
    let percentTwoEven = (globalTwoEvenInSet * 100.00) / amountOfSets;
    let percentThreeEven = (globalThreeEvenInSet * 100.00) / amountOfSets;
    let percentFourEven = (globalFourEvenInSet * 100.00) / amountOfSets;
    let percentFiveEven = (globalFiveEvenInSet * 100.00) / amountOfSets;
    let percentSixEven = (globalSixEvenInSet * 100.00) / amountOfSets;

    console.log();
    console.log(`Total sets = ${amountOfSets}`);
    console.log(`Total even numbers = ${globalTotalEvenNumbers}`);
    console.log(`Total odd numbers = ${globalTotalOddNumbers}`);
    console.log();
    console.log(`Average amount of even numbers per set = ${averageEven}`);
    console.log(`Average amount of odd numbers per set = ${averageOdd}`);
    console.log();
    console.log(`The amount of sets with zero even numbers or six odd numbers is ${globalZeroEvenInSet}, a percentage of ${percentZeroEven}%`);
    console.log(`The amount of sets with one even numbers or five odd numbers is ${globalOneEvenInSet}, a percentage of ${percentOneEven}%`);
    console.log(`The amount of sets with two even numbers or four odd numbers is ${globalTwoEvenInSet}, a percentage of ${percentTwoEven}%`);
    console.log(`The amount of sets with three even numbers or three odd numbers is ${globalThreeEvenInSet}, a percentage of ${percentThreeEven}%`);
    console.log(`The amount of sets with four even numbers or two odd numbers is ${globalFourEvenInSet}, a percentage of ${percentFourEven}%`);
    console.log(`The amount of sets with five even numbers or one odd numbers is ${globalFiveEvenInSet}, a percentage of ${percentFiveEven}%`);
    console.log(`The amount of sets with six even numbers or zero odd numbers is ${globalSixEvenInSet}, a percentage of ${percentSixEven}%`);
    console.log();
} // End of evenAndOddPercentageCalculator function.

// Function to check which is the six most repeated numbers in the set.

// Use a hashTable - key is the number, value is the amount of times it appears in the set.
// function mostRepeatedNumbers() {
//
//
// }


export {evenAndOddCalculator, evenAndOddPercentageCalculator};