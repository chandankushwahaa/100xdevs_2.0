import axios from 'axios';
import React, {useState, useEffect} from 'react'

const _04UseEffect = () => {

  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <>
    <h2>04 UseEffect</h2>
    <p>Add page button to switch to individual todo by clicking it.</p>

      <button onClick={() => setCurrentPage(1)}>Page 1</button>
      <button onClick={() => setCurrentPage(2)}>Page 2</button>
      <button onClick={() => setCurrentPage(3)}>Page 3</button>
      <button onClick={() => setCurrentPage(4)}>Page 4</button>
      <button onClick={() => setCurrentPage(5)}>Page 5</button>

      <Todo id={currentPage} />
    </>
    )
};


function Todo({ id }) {
  const [todo, setTodo] = useState({});
 
  useEffect(() => {
    // if (id) {
      axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(function (res) {
          setTodo(res.data.todo);
        })
        // .catch((error) => console.error('Error fetching todo:', error));}
  }, [id]);

  return (
    <div>
      Id : {id}
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}

export default _04UseEffect