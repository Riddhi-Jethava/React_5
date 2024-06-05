import React from 'react'
import { useState } from 'react'

function StateProps() {
    const [count, setCount] = useState()
    function Decrement() {
        if (count == 0) {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <div id='counter'>
                <center>
                    <img src="https://t3.ftcdn.net/jpg/03/35/98/48/360_F_335984830_ziRb3iNSK4J8ywfzwY9Np5GUnL9o7V3x.jpg" alt="" />
                    <h3> Count : {count}</h3>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={Decrement}>Decrement</button>
                    <button onClick={() => setCount(0)}>Reset</button>
                </center>
            </div>
        </div>
    )
}

export default StateProps
