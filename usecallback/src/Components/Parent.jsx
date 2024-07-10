import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [count , setCount] = useState(0)
    const [counter , setCounter] = useState(0)

    const handleIncrement = () => {
      setCount(count + 1)
    }

    

  return (
    <div>
        <h1>Counter : {count}</h1>
      <button onClick={handleIncrement}>
        plus
      </button>
      <Child/>
    </div>
  )
}

export default Parent
