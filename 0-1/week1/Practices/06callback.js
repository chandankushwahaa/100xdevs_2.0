// Callback is a function that is passed as an argument to another function and is executed after its parent function has completed.
// Callbacks are used to make sure that a function is not going to run before a task is completed but will run right after the task has completed. 
// It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.

function hello(a, b){

    b();  // b is a callback function
}

//hello(1,2)  // Not a callback
hello(1, function(){console.log("Callback Chala")})  // Callback 



// Example 2
function doSomeAsyncWork(x, y, callback){
    setTimeout(function(){
        callback(x, y);
    }, 1000);
}

doSomeAsyncWork(1, 2, function(x, y){
    console.log(x + y);
});


// Example 3 - Bring users data and print name, email, and gender.
function getUsersData(url, callback){
    fetch(url)
        .then(raw => raw.json())
        .then(result => {
            callback(result.results[0]);
        });
}

getUsersData('https://randomuser.me/api', function(user){
    console.log(user.name.first, user.name.last);
    console.log(user.email);
    console.log(user.gender);
});
