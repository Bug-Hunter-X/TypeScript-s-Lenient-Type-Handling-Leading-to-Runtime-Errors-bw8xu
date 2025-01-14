function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
  return a + b;
}

// Using type assertion (Less safe, use with caution):
const result1 = add(Number("10"), Number("20"));
console.log(result1); //This will work, but input validation is important

// Using the improved function
const result2 = addSafe(10, 20);
console.log(result2); 

const result3 = addSafe("hello", 20); //this will throw error
console.log(result3); 