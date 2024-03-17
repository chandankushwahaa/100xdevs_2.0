//  Fetch API - It is a Web API provided by the browser. It is used to make HTTP requests to the server.

// 1. using random user API

fetch('https://randomuser.me/api')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        // console.log(data.results[0].name);
        // console.log(data.results[0].location);
    })
    .catch(error => {
        console.log('Error:', error);
    });