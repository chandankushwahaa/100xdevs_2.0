//  Create a terminal clock (HH:MM:SS)

setInterval(() => {
    let time = new Date().toLocaleDateString();
    console.log(time);
}, 1000)
// Keeps printing the time every second.
