
const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post('/health-checkup', function(req, res){
    // kidneys = [1,2] - type in body of postman and use POST method
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
        // res.send({
        //     response
        // });
        // OR
        if(!response.success){
            res.status(411).json({
                message: 'Bad Input!'
            });
        }else{
            res.send({
                response
            });
        }
});


app.listen(3000);   