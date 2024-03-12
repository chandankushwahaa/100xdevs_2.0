const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const mainRouter = require("./routes/index.routes");


dotenv.config();
const app = express();
app.use(cors());


app.get('/', function(req, res){
    res.send("Hello World");
});


app.use('/api/v1', mainRouter)


// Run the server
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

// Connect to the database
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to database");
})
.catch((err) => {
  console.log("Error connecting to database", err);
}); 
