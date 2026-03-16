import  {merge_collection}  from '../Function/Merge';

describe('merge_collection', () => {
    const Test_Case = [
        {
            input: {
                Collection1: [1,2,3],
                Collection2: [4,5,6],
                Collection3: [9,8,7]
            },
            expect: [1,2,3,4,5,6,7,8,9]
        }
    ]

    for(const testcases of Test_Case){
        test('tc01', () => {
            const results = merge_collection(
                testcases.input.Collection1, 
                testcases.input.Collection2, 
                testcases.input.Collection3);
            expect(results).toEqual(testcases.expect);
        })
    }
});