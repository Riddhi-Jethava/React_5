import React from 'react'
import UpdatedComponent from './UpdatedComponent'

function Person2({money , Handle}) {
  return (
    <div className='text-center'>
      <h5>Shiv is Offering: ${money}</h5>
      <button className='btn btn-primary ps-3 pe-3' onClick={Handle}>Click!</button>
    </div>
  )
}

export default UpdatedComponent(Person2)
