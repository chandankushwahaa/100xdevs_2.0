// UseEffect is a hook that allows you to perform side effects in function components. 
// It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components. 
// It is used to fetch data from the server, update the DOM, and perform other side effects.

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const _02UseEffect = () => {

   const [todos, setTodos] = React.useState([])


  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todos')
      .then(function(response){
        setTodos(response.data.todos)
      })
  }, [])
// The Below code runs infinitely because of the missing dependency array [] in the useEffect hook 
  // axios.get('https://sum-server.100xdevs.com/todos')
  // .then(function(response){
  //   setTodos(response.data.todos)
  // })


  return (
    <>
    <h2>02 useEffect</h2>
    <p>Fetching todos from server using axios every time your referesh</p>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} key={todo.id} />)}
    </>
  )

  function Todo({title, description}){
    return <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  }
}

export default _02UseEffect;