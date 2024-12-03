import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decreese</button>
            <button onClick={() => setCount(0)}>Clear</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
        </div>
    </div>
  )
}
