// 1. Callback
function callbackData(url, callback){
    fetch(url)
        .then(raw => raw.json())
        .then(result => {
            callback(result);
        })
}
callbackData('https://randomuser.me/api', (data) => {
    console.log(data.results[0].name);
});


// 2. Promises
function promiseData(url){
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(raw => raw.json())
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            })
    })
}
promiseData('https://randomuser.me/api')
    .then(data => {
        console.log(data.results[0].name);
    })
    .catch(error => {
        console.log(error);
    });


// 3. Async/Await
async function asyncData(url){
    try {
        const raw = await fetch(url);
        const result = await raw.json();
        console.log(result.results[0].name);
    } catch (error) {
        console.log(error);
    }
}
asyncData('https://randomuser.me/api');
