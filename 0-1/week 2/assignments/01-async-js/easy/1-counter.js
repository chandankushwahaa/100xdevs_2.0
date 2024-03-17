let count = 0;
function counter(){
    // let count = 0;
    count += 1;
    console.log(count);
    // if count is 10, stop the counter
    if (count >= 10) {
        clearInterval(interval)
    }
}
// call counter every 1 second
const interval = setInterval(counter, 1000);