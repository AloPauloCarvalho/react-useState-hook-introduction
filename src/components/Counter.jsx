import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Clear</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
        </div>
    </div>
  )
}
