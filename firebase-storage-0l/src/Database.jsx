import React, { useState } from 'react'
import { ref, set } from "firebase/database";
import { database } from './Firebase';

function Database() {
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newRef = ref(database, `user${name}`)
    set(newRef, {name, password})
    .then(()=>{
      alert('Data add successfully')
    })
    .catch(()=>{
      alert('Data add unsuccessfully')
    })

    setname('')
    setpassword('')
  }

return (
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name: </label>
      <input type="text" value={name} onChange={(e) => setname(e.target.value)} /> <br /><br />
      <label htmlFor="">Password: </label>
      <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} /> <br /><br />
      <button type='submit'>submit</button>
    </form>
  </div>
)
}

export default Database
