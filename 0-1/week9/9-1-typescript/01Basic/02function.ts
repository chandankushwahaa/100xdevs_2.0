function yourName(name: string){
  return `Your name is ${name}`
}
console.log(yourName('Chandan'));


function fun(name: string, age: number): string {
  return `My name is ${name}, I am ${age} years old.`
}
console.log(fun('Chandan', 23));

// Sum of two numbers
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20)); 


// Return True or False if user is 18+
function user(num: number): boolean{
  if(num > 18){
    return true;
  }
  return false;
}
console.log(user(20));


// Create a function that takes another function as input, and runs it after 1 second.
function runAfter1Second(func: Function){
  setTimeout(func, 1000);
}
runAfter1Second(() => console.log('Hello World! After 1 second'));

function runAfter2Second(fn: () => void){
  setTimeout(fn, 2000);
}
runAfter2Second(() => console.log('Hello World! After 2 second'));