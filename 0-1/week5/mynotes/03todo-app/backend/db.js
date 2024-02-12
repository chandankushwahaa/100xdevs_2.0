/*
  Todo{
    title: string,
    description: string,
    completed: boolean
  }
*/

const mongoose = require('mongoose');

// put link in .env file 
mongoose.connect("mongodb+srv://admin:admin@cluster0.drcpyjj.mongodb.net/todos")

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todoapp-week52', todoSchema);

module.exports = {
  todo: todo
}