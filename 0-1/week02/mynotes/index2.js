const express = require("express");

const app = express();

function sum(n){
    let ans = 0;
    for(let i=0; i<=n; i++){
        ans += i;
    }
    return ans;
}

// app takes routes and callback function
// req, res => request, response
app.get("/", function(req, res){
    const n = req.query.n;
    const ans = sum(n);
      res.send("Hi There Sum is: " + ans);
})
 
app.listen(3000);

// open browser - localhost:3000/?n=20  (after ? - there is query parameters)