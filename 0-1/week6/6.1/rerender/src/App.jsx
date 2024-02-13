import React, { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState("Chandan");

  function updateTitle(){
    setTitle("Hello "+ Math.random().toString(36).substring(7) + "!") 
  }
  
  return (
    <>
      <h1>Click the button to add random value</h1>
      <button onClick={updateTitle}>Click me</button>
      <Header title={title}></Header>
    </>
  )

  function Header({title}){
    return <div>
      {title}
    </div>
  }
}

export default App
