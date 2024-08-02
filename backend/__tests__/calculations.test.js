import { evenAndOddCalculator } from '../calculations.js';

// Mock the imported resultsArray
jest.mock('../parser.js', () => ({
    resultsArray: [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18]
    ]
}));

test('evenAndOddCalculator calculates correctly', () => {
    // Log inside the test to ensure it runs
    console.log('Running evenAndOddCalculator test');

    const result = evenAndOddCalculator();

    expect(result.totalEvenNumbers).toBe(9);
    expect(result.totalOddNumbers).toBe(9);
    expect(result.zeroEvenInSet).toBe(0);
    expect(result.oneEvenInSet).toBe(0);
    expect(result.twoEvenInSet).toBe(0);
    expect(result.threeEvenInSet).toBe(3);
    expect(result.fourEvenInSet).toBe(0);
    expect(result.fiveEvenInSet).toBe(0);
    expect(result.sixEvenInSet).toBe(0); 

    // Check numbersMap content
    // const expectedNumbersMap = new Map([
    //     [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
    //     [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
    //     [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1]
    // ]);

    // expect(Array.from(result.numbersMap.entries())).toEqual(Array.from(expectedNumbersMap.entries()));
});