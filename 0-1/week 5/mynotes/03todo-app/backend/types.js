const zod = require("zod");

/*
body - POST
{
  title: "string",
  description: "string"
}
body - PUT
{
  id: "string"
}
*/

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string()
})

const updateTodo = zod.object({
  id: zod.string()
})


module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo
}