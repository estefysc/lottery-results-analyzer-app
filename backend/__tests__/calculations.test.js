import { evenAndOddCalculator, evenAndOddPercentageCalculator } from '../calculations.js';

const resultsArray = [
    [1, 10, 31, 39, 50, 53],
    [6, 27, 28, 39, 49, 50],
    [4, 13, 34, 35, 42, 50],
    [10, 16, 25, 37, 47, 50],
    [16, 19, 26, 29, 45, 46],
    [7, 14, 16, 18, 20, 42]
];

// Mock imported resultsArray - used in evenAndOddCalculator test
jest.mock('../parser.js', () => ({
    resultsArray: resultsArray
}));

describe('Calculations Tests', () => {
    const expectedNumbersMap = new Map([
        [1, 1], [10, 2], [31, 1], [39, 2], [50, 4], [53, 1], [6, 1], [27, 1], [28, 1], [49, 1],
        [4, 1], [13, 1], [34, 1], [35, 1], [42, 2], [16, 3], [25, 1], [37, 1], [47, 1], [19, 1],
        [26, 1], [29, 1], [45, 1], [46, 1], [7, 1], [14, 1], [18, 1], [20, 1]
    ]);

    test('evenAndOddCalculator calculates correctly', () => {
        console.log('Running evenAndOddCalculator test');

        const result = evenAndOddCalculator();

        expect(result.totalEvenNumbers).toBe(20);
        expect(result.totalOddNumbers).toBe(16);
        expect(result.zeroEvenInSet).toBe(0);
        expect(result.oneEvenInSet).toBe(0);
        expect(result.twoEvenInSet).toBe(1);
        expect(result.threeEvenInSet).toBe(3);
        expect(result.fourEvenInSet).toBe(1);
        expect(result.fiveEvenInSet).toBe(1);
        expect(result.sixEvenInSet).toBe(0);

        expect(Array.from(result.numbersMap.entries())).toEqual(Array.from(expectedNumbersMap.entries()));
    });

    // Mock the evenAndOddCalculator function for evenAndOddPercentageCalculator test
    jest.resetModules();
    jest.mock('../calculations.js', () => ({
        ...jest.requireActual('../calculations.js'),
        evenAndOddCalculator: jest.fn().mockReturnValue({
            totalEvenNumbers: 20,
            totalOddNumbers: 16,
            zeroEvenInSet: 0,
            oneEvenInSet: 0,
            twoEvenInSet: 1,
            threeEvenInSet: 3,
            fourEvenInSet: 1,
            fiveEvenInSet: 1,
            sixEvenInSet: 0,
            numbersMap: new Map([
                [1, 1], [10, 2], [31, 1], [39, 2], [50, 4], [53, 1], [6, 1], [27, 1], [28, 1], [49, 1],
                [4, 1], [13, 1], [34, 1], [35, 1], [42, 2], [16, 3], [25, 1], [37, 1], [47, 1], [19, 1], 
                [26, 1], [29, 1], [45, 1], [46, 1], [7, 1], [14, 1], [18, 1], [20, 1]
            ])
        })
    }));

    test('evenAndOddPercentageCalculator calculates correctly', () => {
        const result = evenAndOddPercentageCalculator();
        const amountOfSets = resultsArray.length;

        expect(result.averageEven).toBe(20 / amountOfSets);
        expect(result.averageOdd).toBe(16 / amountOfSets);
        expect(result.percentZeroEven).toBe((0 * 100.0) / amountOfSets);
        expect(result.percentOneEven).toBe((0 * 100.0) / amountOfSets);
        expect(result.percentTwoEven).toBe((1 * 100.0) / amountOfSets);
        expect(result.percentThreeEven).toBe((3 * 100.0) / amountOfSets);
        expect(result.percentFourEven).toBe((1 * 100.0) / amountOfSets);
        expect(result.percentFiveEven).toBe((1 * 100.0) / amountOfSets);
        expect(result.percentSixEven).toBe((0 * 100.0) / amountOfSets);

        expect(Array.from(result.numbersMap.entries())).toEqual(Array.from(expectedNumbersMap.entries()));
    });
});
    