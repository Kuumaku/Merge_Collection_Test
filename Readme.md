## Overview
```
Folder Structure
    ├── Merge_Collection_Test
    |   ├──executable
    |   |  ├── Function
    |   ├── Function
    |   |  ├── Merge.ts
    |   ├── Test
    |   |   ├── Merge.test.ts
    |   ├── package.json
    |   ├── package-lock.json
    |   ├── jest.config.js
    |   ├── coverage
    |   ├── tsconfig.json

```
```
Merge Function
This project implements a function that merges three collections of numbers into a single sorted array.

Conditions:

collection_1 and collection_2 are already sorted in ascending order.

collection_3 is sorted in descending order.

The function returns one array sorted in ascending order containing all elements from the three collections.

No built-in sorting functions are used.

with time complexity Time Complexity: O(n + m + k), where :
n = size of collection_1

m = size of collection_2

k = size of collection_3

This is achieved by using a three-pointer merge approach, traversing each collection only once.
```

## Installation
```
Dependencies setting
    open terminal and enter these commands to install dependencies needed to run the function and test : 
    npm install typescript
    npm install jest @types/jest ts-jest 
    npm install jest-html-reporter
```

```
Alternatively, install them all at once :
    npm install typescript jest @types/jest ts-jest jest-html-reporter
```

## Running the Code
```
Step to execute the code
1. Edit the values in each collection
    Inside Function folder -> Merge.ts
    in col1, col2 please enter the values in order in ascending order
        ex. [1,2,3]
    in col3 please enter the values in descending order
        ex. [6,5,4]
2. Create executable js file 
    In terminal please type in 
        tsc
    this will create file name "Merge.js" inside executable\Function folder
3. Run Merge.js 
    When run Merge.js that get created the results array should show in terminal
```

## Running Unit Tests
```
Step to running unit test
0. Add more test cases
    In order to add more test cases please add test elements inside "Test_Cases" array For example :
        {
            input: 
            {
                collection1: [1,2,3],
                collection2: [4,5,6],
                collection3: [10,9,8]
            },
            expected: [1,2,3,4,5,6,8,9,10]
        },

1.Run the test
    To run the test please type
        npm run test
    in the terminal this should run the test file and show the results in the terminal

2.See web reports
    If the results on the terminal are hard to read there is the file "test-report.html" that created after finishing the test
    This files contain results of the test in more readable web format.
    To open this file simply open the "test-report.html" with chrome and refresh it after running new test.

```

## Test coverage
```
Test coverage is generated automatically when running the test command. It measures how much of the code is executed during testing to ensure the implemented logic is properly validated.

The coverage report includes the following metrics:

Statements – Percentage of executed statements.

Branches – Percentage of executed conditional branches (if, else, etc.).

Functions – Percentage of functions called during tests.

Lines – Percentage of executed lines of code.

Example Coverage Output
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   100   |    100   |     100 |   100   |
 Merge.ts |   100   |    100   |     100 |   100   | 100
----------|---------|----------|---------|---------|-------------------
```