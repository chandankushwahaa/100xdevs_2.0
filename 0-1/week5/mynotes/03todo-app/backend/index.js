
const { todo } = require('./db');
const { createTodo, updateTodo } = require('./types');


const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// body{
//   title: "string",
//   description: "string"
// }
app.post("/todo", async function(req, res) {
  try {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
      res.status(411).json({
        msg: "You send the Wrong Inputs",
      });
      return;
    }
    // Put in MONGODB - from db.js
    const newTodo = await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false
    });
    res.json({
      msg: "Todo Created",
      todo: newTodo
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({
      msg: "Internal server error"
    });
  }
});



app.get("/todos", async function(req, res){
  const todos = await todo.find({});
  res.json({
    todos: todos
  })
})




app.put("/completed", async function(req, res){
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg: "You sent the Wrong Input",
    })
    return;
  }

  await todo.updateOne({
    _id: req.body.id
  }, {
    completed: true
  })
  
  res.json({
    msg: "Todo Mark as Completed"
  })

})



app.listen(3000);