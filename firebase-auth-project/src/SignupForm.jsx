import React, { useEffect, useState } from 'react'
import { auth, facebookProvider, googleProvider } from './config'
import { signInWithPopup } from 'firebase/auth'
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form data:', formData);
    }

    const handleSocialLogin = (platfrom) => {
        console.log(`Logging in with ${platfrom}`);
        if(platfrom === 'Facebook'){
            signInWithPopup(auth, facebookProvider)
            .then((data) => {
                const user = data.user;
                const credential = facebookProvider.credentialFormResult(data);
                const accessToken = credential.accessToken;
                //Handle successful login
            }) .catch((err) => {
                alert(err);
            });
        }

        if(platfrom === 'Google') {
            signInWithPopup(auth, googleProvider)
            .then((data) => {
                setValue(data.user.email);
                localStorage.setItem('email', data.user.email);
                // Handle successful login
            }) .catch((err) => {
                alert(err);
            });
        }

        
    }
    useEffect(() => {
        let userEmail = localStorage.getItem('email');
        if(userEmail) {
            setValue(userEmail);
        }
    }, []);

    return (
        <div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Sign-up
                                    </div>
                                    <div className="card-body">
                                        <form action="" onSubmit={handleSubmit} className='border rounded rounded-3'>
                                            <div className="form-group m-3">
                                                <label htmlFor="">
                                                    Username
                                                </label>
                                                <input type="text" name="username" id="username" onChange={handleChange} className='form-control' />
                                            </div>
                                            <div className="form-group m-3">
                                                <label htmlFor="">
                                                    Email
                                                </label>
                                                <input type="text" name="email" id="username" onChange={handleChange} className='form-control' />
                                            </div>
                                            <div className="form-group m-3">
                                                <label htmlFor="">
                                                    Password
                                                </label>
                                                <input type="text" name="password" id="username" onChange={handleChange} className='form-control' />
                                            </div>
                                            <button type='submit' className='btn btn-primary m-3'>SignUp</button>
                                        </form>

                                        <div className="social-login">
                                            <p className='mt-2'>or sign up with</p>
                                            <div>
                                                <button className='btn btn-primary' onClick={() => handleSocialLogin('Google')}>
                                                    <FaGoogle /> Google
                                                </button>
                                                <button className='btn btn-primary ms-3' onClick={() => handleSocialLogin('Facebook')}>
                                                    <FaFacebook /> Facebook
                                                </button>
                                                <button className='btn btn-primary ms-3' onClick={() => handleSocialLogin('GitHub')}>
                                                    <FaGithub/> GitHub
                                                </button>
                                            </div>
                                        </div>
                                    
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
