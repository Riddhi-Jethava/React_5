import React, { useReducer } from 'react'
import initialState from "./initialState";
import { decrement, increment } from "./actions";
import reducer from "./reducer";

function AddDetails() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIncrement = (id) => {
        dispatch(increment(id))
    }

    const handleDecrement = (id) => {
        dispatch(decrement(id))
    }

    const total = state.prices.reduce((sum , item) => sum + item.value , 0)

    return (
        <div>
            {
                state.prices.map(item => (
                    <>
                        <h5 className='mt-5'>Price Rs. : {item.price}</h5>
                        <h5>Amount : {item.value}</h5>
                        <button className='btn border' onClick={() => handleIncrement(item.id)}>add items</button>
                        <button className='btn border ms-3' onClick={() => handleDecrement(item.id)}>Dlt items</button>
                    </>
                )
                )}
                <h3>Total : {total}</h3>
        </div>
    )
}

export default AddDetails
