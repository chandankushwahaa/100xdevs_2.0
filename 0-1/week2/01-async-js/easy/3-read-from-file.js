const fs = require('fs');

fs.readFile('./3-file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// This loop is synchronous, it will block the execution of the code until it is done.
for(let i = 0; i < 10000000000; i++) {
    // this loop will take a long time to finish
}
console.log('loop ended!');

// readfile works asynchronously, it will not block the execution of the code.
// it will read data and wait in callback queue until the call stack is empty.
// after the loop is done, it print "loop ended!" and then read the file and print the data.