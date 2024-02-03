// Using middleware to check if the user is logged in or not

const express = require('express');
const app = express();

app.get('/health-checkup', (req, res) => {
    // Do health check here
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username === 'admin' && password === 'admin') {
        if (kidneyId === '1' || kidneyId === '2') {
            res.json({ 
                status: 'success', 
                message: 'Your Kidney is Fine!' 
            });
        }
        else{
            res.json({ 
                status: 'Failed', 
                message: 'Bad Input!' 
            });
        }
    }

    res.status(401).json({
        status: 'Something unexpected happened!',
        message: 'Unauthorized'
    });
});

app.listen(3000);

/*
Run - node index.js
url - localhost:3000/health-checkup?kidneyId=1 (change kidneyId to 2 and 3 to see different outputs)
headers - username: admin, password: admin (use postman)
*/
