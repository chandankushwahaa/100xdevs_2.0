import React from 'react';
import { useState } from 'react';

const Todo = () => {

  // Any time a parent component re-renders, its children will also re-render.
  // React memo is use to prevent re-rendering of the child component. (high level)
  const [todos, setTodos] = useState([
    { id: 1,
      title: "Learn React",
      date: "2021-10-20",
      completed: true
    },
    {
      id: 2,
      title: "Learn Node",
      date: "2021-10-21",
      completed: false
    },
    {
      id: 3,
      title: "Learn Express",
      date: "2021-10-22",
      completed: false 
    }
  ]);

  function addTodo(){
    setTodos([...todos, {
      id: 4,
      title: "Learn MongoDB",
      date: "2021-10-23",
      completed: false
    }])
  }

  function Todo(props){
    return(
      <div>
        <h1>{props.title}</h1>
        <p>{props.date}</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Todo App</h1>

      {/* 1. */}
        {/* <Todo title={todos[0].title} date={todos[0].date} />
        <Todo title={todos[1].title} date={todos[1].date} />
        <Todo title={todos[2].title} date={todos[2].date} /> */}

      
      {/* 2, */}
      <div>
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {todos.map((todo) => (
        <Todo title={todo.title} date={todo.date} />
      ))}
    
    </div>
  )
}

export default Todo