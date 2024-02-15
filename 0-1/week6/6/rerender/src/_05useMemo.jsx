// useMemo is a hook that will only recompute the memoized value when one of the dependencies has changed. 
// This optimization helps to avoid expensive calculations on every render.

import React, { useEffect, useMemo, useState } from 'react';

const _05useMemo = () => {

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);

// 1. using normal for loop
  // let count = 0;
  // for (let i = 1; i <= input; i++) {
  //   count += i;
  // }


// 2. using useEffect()
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   let finalCount = 0;
  //   for(let i=1; i<=input; i++){  
  //     finalCount += i;
  //   }
  //   setCount(finalCount);
  // }, [input]);


// 3. Using useMemo()
  const count = useMemo(() => {
    // console.log('useMemo called');
    let finalCount = 0;
    for(let i=0; i<=input; i++){
      finalCount += i;
    }
    return finalCount;
  }, [input]);




  return (
    <>
      <h2>05 useMemo</h2>
      <p>add counter button and an input box(n) and you need to shoq th sum of 1 to n.</p>

      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='enter the vlue' />
      <p>Sum from 1 to {input} is: {count} </p>

      <button onClick={() => {setCounter(counter + 1)}}>Counter ({counter})</button>
    </>
  )
}

export default _05useMemo