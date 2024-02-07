//  Async/Await is a new way to write asynchronous code. It is built on top of promises, so it is also non-blocking.
//  It makes the code look like it is synchronous, but it is asynchronous.
//  We use the async keyword to define an async function, and the await keyword to wait for a promise.
//  The await keyword can only be used inside an async function.
//  An async function will always return a promise.
//  If the function returns a value, the promise will be resolved with the value.
//  If the function throws an exception, the promise will be rejected.


// Example 1
async function fetchData(){
    //  console log a will not be executed until the fetch is completed
    let a = await fetch('https://randomuser.me/api')
    a = await a.json();
    console.log(a);
}

fetchData();