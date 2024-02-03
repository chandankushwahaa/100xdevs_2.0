//  Route handler is a middleware function that can perform operations on the request and response objects, end the request-response cycle, or call the next middleware function in the stack.

const express = require('express');
const app = express();

// Defining middleware (just another function)
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username === 'admin' && password === 'admin') {
        next();
    }
    else{
        res.status(401).json({
            status: 'Failed',
            message: 'Unauthorized'
        });
    }
};

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId === '1' || kidneyId === '2') {
        next();
    }
    else{
        res.status(400).json({
            status: 'Failed',
            message: 'Bad Input!'
        });
    }
};


// Using middleware to check if the user is logged in or not
app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res) {
    res.json({ 
        status: 'success', 
        message: 'Your Kidney is Fine!' 
    });
});


app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, function(req, res) {
    // Do kidney check here 
});

app.get("/heart-checkup", userMiddleware, function(req, res) {
    // Do heart check here 
});

app.listen(3000);