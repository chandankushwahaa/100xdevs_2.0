// Generators are a new type of function in ES6 that allow you to pause and resume the execution of a function. 
// This is useful for asynchronous operations, such as reading from a file or fetching data from a server. Generators are defined using the function* syntax, and yield is used to pause the execution of the function and return a value. The next method is used to resume the execution of the function.


function* printNums(){
    console.log('First');
    yield 1;  // yield pauses the execution of the function and returns a value
    console.log('Second');
    yield 2;
    console.log('Third');
    yield 3;
}
const gen = printNums();
console.log(gen.next().value); // gives value 1

console.log(gen.next()); // object { value: 2, done: false }