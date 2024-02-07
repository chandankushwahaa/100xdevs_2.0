// Basic MognoDB connection
// to install - npm install mongoose --save


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.drcpyjj.mongodb.net/test') // test is the name of the database

const User = mongoose.model('User', { name: String, email: String, password: String });

const user = new User({
  name: 'Chandan Kushwaha',
  email: 'chandan@gmail.com',
  password: '12345'
});

user.save(); // save the user to the database

// to run this file - node 02mongodbConnection.js
// to check the database - go to the MongoDB Compass and check the database