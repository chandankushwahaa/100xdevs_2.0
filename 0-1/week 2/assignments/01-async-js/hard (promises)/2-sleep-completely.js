/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
        const start = new Date().getTime();
        // This loop continues until the current time minus the start time is greater than the number of milliseconds passed during this time the thread should not be able to do anything else.
        // This is a busy wait.
        while (new Date().getTime() - start < milliseconds) {
            // Do nothing
        }
        resolve();
    });
}

module.exports = sleep;
