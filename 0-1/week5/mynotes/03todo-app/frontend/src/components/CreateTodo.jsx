import React, { useState } from 'react';


const CreateTodo = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
          <input id="title" type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
          }} /> <br />
          <input id="desc" type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
          }}/> <br />

          <button onClick={() => {
            fetch('http://localhost:3000/todo', {
              method: 'POST',
              body: JSON.stringify({
                title: title,
                description: description
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(async function(response){ 
                const data = await response.json();
                alert("Todo Created")
              })
          }}>Add Todo</button>
    </div>
  )
}

export default CreateTodo;