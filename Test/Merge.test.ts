import  {merge_collection}  from '../Function/Merge';

describe('merge_collection', () => {

    const Test_Case = [ //array to store test cases
        {
            /*
            input is an object that contains 3 collections of arrays of numbers, 
            the expected output is an array of numbers that contains all the numbers from the 3 collections in ascending order. 
            The function merge_collection is called with the 3 collections as arguments and the result is compared to the expected output using expect and toEqual. 
            This test case checks if the function correctly merges and sorts the numbers from the 3 collections.
             */

            input: {
                Collection1: [1,2,3],
                Collection2: [4,5,6],
                Collection3: [9,8,7]
            },
            expect: [1,2,3,4,5,6,7,8,9] 
        },
        {
            input: {
                Collection1: [1,3,5],
                Collection2: [2,4,6],
                Collection3: [19,4,2]
            },
            expect: [1,2,2,3,4,4,5,6,19]
        },
    ]


    /*for each test case in the array of test cases, 
    run a test with the name 'Merge test' and a function that calls the merge_collection function
     with the input collections and compares the result to the expected output using expect and toEqual. */
    for(const testcases of Test_Case){ 
        test('Merge test', () => {
            const results = merge_collection(
                testcases.input.Collection1, 
                testcases.input.Collection2, 
                testcases.input.Collection3);
            expect(results).toEqual(testcases.expect);
        })
    }
});
