import React, { useState } from 'react'
import { auth, facebookProvider, googleProvider } from './config'
import { signInWithPopup } from 'firebase/auth'

function SignupForm() {
    const [formData , setFormData] = useState({

    })


    const handleChange = () => {

    }

  return (
    <div>
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                   <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            Sign-up
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">
                                        Username
                                    </label>
                                    <input type="text" name="username" id="" onChange={handleChange} className='form-control'/>
                                </div>
                            </form>
                        </div>
                    </div>
                   </div>      
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
