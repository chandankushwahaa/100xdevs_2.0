function yourName(name) {
    return "Your name is ".concat(name);
}
console.log(yourName('Chandan'));
function fun(name, age) {
    return "My name is ".concat(name, ", I am ").concat(age, " years old.");
}
console.log(fun('Chandan', 23));
// Sum of two numbers
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// Return True or False if user is 18+
function user(num) {
    if (num > 18) {
        return true;
    }
    return false;
}
console.log(user(20));
// Create a function that takes another function as input, and runs it after 1 second.
function runAfter1Second(func) {
    setTimeout(func, 1000);
}
runAfter1Second(function () { return console.log('Hello World! After 1 second'); });
function runAfter2Second(fn) {
    setTimeout(function () { return console.log('Hello World! After 2 second'); }, 2000);
}
runAfter2Second(function () { return console.log('Hello World! After 2 second'); });
