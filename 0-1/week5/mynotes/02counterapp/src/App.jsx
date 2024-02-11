import './App.css';
import { useState } from 'react';
import TodoApp from './Todo';

// useState is a hook that allows you to have state variables in functional components.

function App() {

  //  1. 
  // const [count, setCount] = useState(0);
  // function onClickHandler() {
  //   setCount(count + 1);
  // }
  // return (
  //   <div>
  //     <button onClick={onClickHandler}>counter {count}</button>
  //   </div>
  // )


  // 2.
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CustomerButton count={count} setCount={setCount}> </CustomerButton>
        <CustomerButton count={count - 1} setCount={setCount}> </CustomerButton>
      </div>

    {/* TODOAPP */}
      <TodoApp />

    </>
  )

  // component
  function CustomerButton(props) {
    function onCLickHandler() {
      props.setCount(props.count + 1);
    }
    return <button onClick={onCLickHandler}>counter {props.count}</button>
  }

}

export default App
