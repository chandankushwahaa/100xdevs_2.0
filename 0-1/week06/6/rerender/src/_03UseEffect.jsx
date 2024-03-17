import React, { useEffect, useState } from 'react';

const _03UseEffect = () => {
  const [inputId, setInputId] = useState('');

  return (
    <>
      <h2>03 UseEffect</h2>
      <p>Component that takes Todo id as an input and fetches the todo details from the server and displays it.</p>

      <label htmlFor="todoId">Enter Todo ID less than 6: </label>
      <input
        type="text"
        id="todoId"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />

      <Todo id={inputId} />
    </>
  );
};

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    if (id <= 5 && id > 0) {
      fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(async function (res) {
          const json = await res.json();
          setTodo(json.todo);
        })
        .catch((error) => console.error('Error fetching todo:', error));
    }
    else{
      setTodo({title: 'Invalid ID', description: 'Please enter a valid ID'});
    }
  }, [id]);

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}

export default _03UseEffect;
