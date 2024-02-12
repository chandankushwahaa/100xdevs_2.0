/*
  Todo{
    title: string,
    description: string,
    completed: boolean
  }
*/

const mongoose = require('mongoose');

// put link in .env file 
mongoose.connect("PASTE_YOUR_LINK_HERE/DATABASE_NAME")

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todoapp', todoSchema);

module.exports = {
  todo: todo
}