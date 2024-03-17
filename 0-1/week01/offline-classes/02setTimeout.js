// Calculate the time it takes between a setTimeout call and the inner function actually running.

let i = new Date().getTime();

setTimeout(() => {
    let j = new Date().getTime();
    console.log(`The time difference is ${j - i} milliseconds`);
}, 1000);