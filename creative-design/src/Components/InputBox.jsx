import React from 'react'

function InputBox() {
    return (
        <div className='box'>
            <div className="input-group">
                <input type="text" name='text' className='input'/>
                <label htmlFor="" className='label'>First Name</label>
            </div>
        </div>
    )
}

export default InputBox
