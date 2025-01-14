# TypeScript's Lenient Type Handling Leading to Runtime Errors

This repository demonstrates a potential issue in TypeScript's type checking where string concatenation is allowed in functions expecting numbers, only throwing errors at runtime.

## Problem Description
The `add` function is declared to take two numbers and return a number. However, the code passes strings to the function, which TypeScript allows, resulting in string concatenation instead of addition. This leads to unexpected behavior and runtime errors.

## Solution
Improved type checking in TypeScript or using explicit type guards can prevent this issue.

## Reproduction Steps
1. Clone this repository.
2. Run `tsc bug.ts` to compile the code.
3. Run `node bug.js` to execute the code and observe the runtime error.
4. Run `tsc bugSolution.ts` and `node bugSolution.js` to see the solution in action.

## Note
This issue is a result of TypeScript's flexibility and its attempt to balance type safety with developer freedom.  More restrictive type checking can reduce such issues but may reduce flexibility.