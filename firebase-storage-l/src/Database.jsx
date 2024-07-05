import React, { useState } from 'react'
import { ref, set } from "firebase/database";

function Database() {
    const [databas, setDatabase] = useState('')
  return (
    <div>
    <form action="">
        <label htmlFor="">Name: </label>
        <input type="text" value={name}/>
        <label htmlFor="">Password: </label>
        <input type="password" value={password}/>
    </form>
    </div>
  )
}

export default Database
