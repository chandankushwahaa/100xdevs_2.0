const express = require('express'); 
const moongoose = require('mongoose');
const Product = require('./models/product.model');
const app = express();
const productRoute = require('./routes/product.route');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Route
app.use('/api/products', productRoute);

// Home page
app.get('/', (req, res) => {
  res.send('Welcome to my API');
}); 


moongoose.connect("PASTE_YOUR_DB_LINK/CRUD-week4")
.then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed!');
  });


