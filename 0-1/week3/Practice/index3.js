const express = require("express");
const app = express();

const users = [{
    name: "Chandan",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());


app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    // console.log(johnKidneys);
    const noOfKidneys = johnKidneys.length;

    let noOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys = noOfHealthyKidneys + 1;
        }
    }
    const noOfUnealthyKidneys = noOfKidneys - noOfHealthyKidneys;

    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnealthyKidneys
    })
})

// POST - send data in the body
// Every time we make a POST request the kidney is added
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "POST Done"
    })
})
// To make a POST request use POSTMAN
// {"isHealthy: true"}  -> type under body section of POSTMAN

// Now after making 4-5 POST request the noOfKidneys get increases (check in localhost)



// PUT - User can replace a kidney, make it healthy
app.put("/", function(req, res){
    for(let i =0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "PUT Done!"
    });
})


// DELETE - user can remove a unHealthy kidneys
app.delete("/", function(req, res){

    if(isThereAtLeastOneUnhealthyKidney()){
        
        const newKidneys = [];
        for(let i =0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "DELETE Done!"
        }); 
    }else{
        res.status(411).json({
            msg: "You have no bad Kidneys"
        });
    }

})


// only if atleast one unhealty kidney is there else return 411
function isThereAtLeastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}



app.listen(3000);