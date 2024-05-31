import React, { useReducer } from 'react'
import initialState from "./initialState";
import { increment } from "./actions";
import reducer from "./reducer";

function AddDetails() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIncrement = (id) => {
        dispatch(increment(id))
    }

    const total = state.prices.reduce((sum , item) => sum + item.value , 0)

    return (
        <div>
            {
                state.prices.map(item => (
                    <>
                        <h3>Price Rs. : {item.price}</h3>
                        <h3>Amount : {item.value}</h3>
                        <button onClick={() => handleIncrement(item.id)}>add</button>
                    </>
                )
                )}
                <h3>Total : {total}</h3>
        </div>
    )
}

export default AddDetails
