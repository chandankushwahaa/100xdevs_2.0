import React, { useState } from 'react';

const _01Random = () => {
  const [title, setTitle] = useState("Chandan");

  function updateTitle(){
    setTitle("Hello "+ Math.random().toString(36).substring(7) + "!") 
  }
  
  return (
    <>
      <h2>01 Random Value</h2>
      <p>Click the button to add random value</p>
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

export default _01Random;