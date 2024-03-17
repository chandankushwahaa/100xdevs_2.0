//  setInterval - It is a Web API provided by the browser. It schedules a task to be put on the event queue after a given amount of time. 
// It takes function and it keeps on repeating the task after the given amount of time.

// 1. This will print 'Hello setInterval' every 2 seconds until you stop it.
// setInterval(() => {
//     console.log('Hello setInterval');
// }, 2000);


// 2. This will print 'Hello setInterval' every 2 seconds until and when cnt is greater than 5, it will stop the interval.
var cnt = 1;
const interval = setInterval(() => {
    console.log('Hello setInterval');
    cnt++;
    if (cnt > 5) {
        clearInterval(interval);
    }
}, 2000);