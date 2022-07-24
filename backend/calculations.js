import {resultsArray} from "./parser.js";

const numbersInOnePlay = 6;

let globalTotalEvenNumbers = 0;
let globalTotalOddNumbers = 0;

let largestAmountEven = 0;
let largestAmountOdd = 0;
let averageEven = 0;
let averageOdd = 0;

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

// This function is used to calculate the amount of times even and odd numbers appear.
function evenAndOddCalculator() {
    let totalEvenNumbers = 0;
    let totalOddNumbers = 0;

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
        } // End of j-variable for loop. Checks each numbers in each set of six, one play.

        console.log();
        console.log(`For this result: ${resultsArray[i]}`);
        console.log(`even = ${evenCounter}`);
        console.log(`odd = ${oddCounter}`);
    } // End of i-variable for loop. Checks each set of six.

    globalTotalEvenNumbers = totalEvenNumbers;
    globalTotalOddNumbers = totalOddNumbers;

    console.log();
    console.log(`greatest amount of even numbers per set = ${largestAmountEven}`);
    console.log(`greatest amount of odd numbers per set = ${largestAmountOdd}`);
} // End of evenAndOddCalculator function.

function evenAndOddPercentageCalculator() {
    let amountOfSets = resultsArray.length;

    averageEven = globalTotalEvenNumbers / amountOfSets;
    averageOdd = globalTotalOddNumbers / amountOfSets;

    console.log();
    console.log(`Total even numbers = ${globalTotalEvenNumbers}`);
    console.log(`Total odd numbers = ${globalTotalOddNumbers}`);
    console.log(`Total sets = ${amountOfSets}`);
    console.log(`Average amount of even numbers per set = ${averageEven}`);
    console.log(`Average amount of odd numbers per set = ${averageOdd}`);

    let percentZeroEven = (zeroEvenInSet * 100.00) / amountOfSets;
    let percentOneEven = (oneEvenInSet * 100.00) / amountOfSets;
    let percentTwoEven = (twoEvenInSet * 100.00) / amountOfSets;

    console.log(`Percentage of zero even numbers = ${percentZeroEven}`);
    console.log(`Percentage of one even number = ${percentOneEven}`);
}

export {evenAndOddCalculator, evenAndOddPercentageCalculator};