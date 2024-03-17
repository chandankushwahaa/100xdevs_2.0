// Async allows your code to run in the background without blocking the execution of other code. 
// setTimeout, setInterval, FetchAPI, Axios, Promises, etc. are some of the examples of async code.


// 1. setTimeout - It is a Web API provided by the browser. It schedules a task to be put on the event queue after a given amount of time.
console.log('Before');
setTimeout(() => {
  console.log('Hello SetTimeout');
}, 2000);
console.log('After');
