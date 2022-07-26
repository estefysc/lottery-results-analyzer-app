import {resultsArray} from "./parser.js";

const numbersInOnePlay = 6;

let globalTotalEvenNumbers = 0;
let globalTotalOddNumbers = 0;

// let largestAmountEven = 0;
// let largestAmountOdd = 0;
// let averageEven = 0;
// let averageOdd = 0;

let globalZeroEvenInSet = 0;
let globalOneEvenInSet = 0;
let globalTwoEvenInSet = 0;
let globalThreeEvenInSet = 0;
let globalFourEvenInSet = 0;
let globalFiveEvenInSet = 0;
let globalSixEvenInSet = 0;

// let zeroOddInSet = 0;
// let oneOddInSet = 0;
// let twoOddInSet = 0;
// let threeOddInSet = 0;
// let fourOddInSet = 0;
// let fiveOddInSet = 0;
// let sixOddInSet = 0;

let globalZeroOddInSet = 0;
let globalOneOddInSet = 0;
let globalTwoOddInSet = 0;
let globalThreeOddInSet = 0;
let globalFourOddInSet = 0;
let globalFiveOddInSet = 0;
let globalSixOddInSet = 0;

// This function is used to calculate the amount of times even and odd numbers appear.
function evenAndOddCalculator() {
    let totalEvenNumbers = 0;
    let totalOddNumbers = 0;

    let largestAmountEven = 0;
    let largestAmountOdd = 0;

    let zeroEvenInSet = 0;
    let oneEvenInSet = 0;
    let twoEvenInSet = 0;
    let threeEvenInSet = 0;
    let fourEvenInSet = 0;
    let fiveEvenInSet = 0;
    let sixEvenInSet = 0;

    let zeroOddInSet = 0;
    let oneOddInSet = 0;
    let twoOddInSet = 0;
    let threeOddInSet = 0;
    let fourOddInSet = 0;
    let fiveOddInSet = 0;
    let sixOddInSet = 0;

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

            if(evenCounter >= largestAmountEven) {
                largestAmountEven = evenCounter;
            }
            if(oddCounter >= largestAmountOdd) {
                largestAmountOdd = oddCounter;
            }
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
        switch (oddCounter) {
            case 1:
                ++oneOddInSet;
                break;
            case 2:
                ++twoOddInSet;
                break;
            case 3:
                ++threeOddInSet;
                break;
            case 4:
                ++fourOddInSet;
                break;
            case 5:
                ++fiveOddInSet;
                break;
            case 6:
                ++sixOddInSet;
                break;
            default:
                ++zeroOddInSet;
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

    globalZeroOddInSet = zeroOddInSet;
    globalOneOddInSet = oneOddInSet;
    globalTwoOddInSet = twoOddInSet;
    globalThreeOddInSet = threeOddInSet;
    globalFourOddInSet = fourOddInSet;
    globalFiveOddInSet = fiveOddInSet;
    globalSixOddInSet = sixOddInSet;

    console.log();
    console.log(`greatest amount of even numbers per set = ${largestAmountEven}`);
    console.log(`greatest amount of odd numbers per set = ${largestAmountOdd}`);
} // End of evenAndOddCalculator function.

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

    let percentZeroOdd = (globalZeroOddInSet * 100.00) / amountOfSets;
    let percentOneOdd = (globalOneOddInSet * 100.00) / amountOfSets;
    let percentTwoOdd = (globalTwoOddInSet * 100.00) / amountOfSets;
    let percentThreeOdd = (globalThreeOddInSet * 100.00) / amountOfSets;
    let percentFourOdd = (globalFourOddInSet * 100.00) / amountOfSets;
    let percentFiveOdd = (globalFiveOddInSet * 100.00) / amountOfSets;
    let percentSixOdd = (globalSixOddInSet * 100.00) / amountOfSets;

    console.log();
    console.log(`Total sets = ${amountOfSets}`);
    console.log(`Total even numbers = ${globalTotalEvenNumbers}`);
    console.log(`Total odd numbers = ${globalTotalOddNumbers}`);
    console.log();
    console.log(`Average amount of even numbers per set = ${averageEven}`);
    console.log(`Average amount of odd numbers per set = ${averageOdd}`);

    console.log();
    console.log(`The amount of sets with zero even numbers is ${globalZeroEvenInSet}, a percentage of ${percentZeroEven}%`);
    console.log(`The amount of sets with one even numbers is ${globalOneEvenInSet}, a percentage of ${percentOneEven}%`);
    console.log(`The amount of sets with two even numbers is ${globalTwoEvenInSet}, a percentage of ${percentTwoEven}%`);
    console.log(`The amount of sets with three even numbers is ${globalThreeEvenInSet}, a percentage of ${percentThreeEven}%`);
    console.log(`The amount of sets with four even numbers is ${globalFourEvenInSet}, a percentage of ${percentFourEven}%`);
    console.log(`The amount of sets with five even numbers is ${globalFiveEvenInSet}, a percentage of ${percentFiveEven}%`);
    console.log(`The amount of sets with six even numbers is ${globalSixEvenInSet}, a percentage of ${percentSixEven}%`);
    console.log();
    console.log(`The amount of sets with zero odd numbers is ${globalZeroOddInSet}, a percentage of ${percentZeroOdd}%`);
    console.log(`The amount of sets with one odd numbers is ${globalOneOddInSet}, a percentage of ${percentOneOdd}%`);
    console.log(`The amount of sets with two odd numbers is ${globalTwoOddInSet}, a percentage of ${percentTwoOdd}%`);
    console.log(`The amount of sets with three odd numbers is ${globalThreeOddInSet}, a percentage of ${percentThreeOdd}%`);
    console.log(`The amount of sets with four odd numbers is ${globalFourOddInSet}, a percentage of ${percentFourOdd}%`);
    console.log(`The amount of sets with five odd numbers is ${globalFiveOddInSet}, a percentage of ${percentFiveOdd}%`);
    console.log(`The amount of sets with six odd numbers is ${globalSixOddInSet}, a percentage of ${percentSixOdd}%`);
} // End of evenAndOddPercentageCalculator function.

export {evenAndOddCalculator, evenAndOddPercentageCalculator};