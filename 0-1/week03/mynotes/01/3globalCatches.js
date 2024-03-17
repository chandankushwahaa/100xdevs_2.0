// Global catch - To  handle all the errors and helps you give the user a better error message.

const express = require('express');
const app = express();


app.use(express.json());

app.post('/health-checkup', function(req, res){
    // kidneys = [1,2] - type in body of postman and use POST method
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    
    res.send("You have " + kidneysLength + " kidneys");
}); 


// Global catch - To  handle all the errors and helps you give the user a beter error message.
app.use((error, req, res, next) => {
    res.json({
        msg: "Soory something went wrong!"
    });
});


app.listen(3000);