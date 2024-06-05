import React from 'react'
import UpdatedComponent from './UpdatedComponent'

function Person({money , Handle}) {
  return (
    <div className='text-center mt-5'>
      <h5>Shrey is Offering : ${money}</h5>
      <button className='btn btn-primary mb-4 ps-3 pe-3' onClick={Handle}>Click!</button>
      <hr/>
    </div>
  )
}

export default UpdatedComponent(Person)
