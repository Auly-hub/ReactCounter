// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const FunctionComponent = () => {
const [count, setCount] = useState(0);
const handleIncrement = () => {

    setCount (count +1)
}
const handleDecrement = () => {

    setCount (count -1)
}

  return (
    <div>
     <h1>Counter App</h1>
     <h1>Count:{count}</h1>
     <button onClick={(handleIncrement)}>increment</button>
     <button onClick={(handleDecrement)}>decrement</button>
    </div>
  )
}

export default FunctionComponent
