import React, { useState } from 'react';

function EventCondition() {
    const [logIn, setLogIn] = useState(false);

    function handleIn() {
        setLogIn(true);
    }

    function handleOut() {
        setLogIn(false);
    }

    return (
        <div className='mt-5'>
            {logIn ? (
                <>
                    {/* Logged In page */}
                
                    <div className='rounded rounded-5 m-auto main'>

                        <div className='d-flex flex-direction p-3'>
                            <h5 className='mt-2 mb-3'>Setting and activity</h5>
                            <p>Your account</p>

                            <h6><i class="ri-account-circle-line"></i> Account Center
                                <p>Password, security, personal details, ads</p>
                            </h6>

                            <p>Manage your connected experiences and account settings across Meta technologies. <h6 className='text-black'>Learn more</h6></p>

                            <p className='mt-2'>More info and support</p>
                            <h6 className='ms-2'><i class="ri-question-line"></i> Help</h6>
                            <h6 className='ms-2'><i class="ri-user-line"></i> Account status</h6>
                            <h6 className='ms-2 mb-4'><i class="ri-questionnaire-line"></i> About</h6>

                            <p>Login</p>
                            <h6>Login info</h6>
                            <a href="" className='ms-1 mt-3'>Add account</a>
                            <a href=""><button className="logout fs-6 text-danger mt-2" onClick={handleOut}>Log Out</button></a>
                            <a href="" className='text-danger ms-1 mt-2'>Log out all accounts</a>
                        </div>

                    </div>
                </>
            ) : (
                /* Log In page */
                
                <div className='rounded rounded-5 m-auto main' id='logIn'>

                    <div className='text-center d-flex flex-direction p-3'>
                        <h4 className='m-5'>Instagram</h4>
                        <a className='mb-4 text-decoration-none'><i className="ri-user-fill fs-2 border rounded rounded-5 p-2"></i></a>
                        <input type="text" placeholder='username' className='form-control mb-4' />
                        <input type="password" placeholder='Password' className='form-control mb-4' />
                        <h6><input type="checkbox" />Remember me <a href="" className='ps-5 text-decoration-none'>Forgot password?</a></h6>
                        <button className="btn m-auto mt-4" onClick={handleIn}>Log In</button>
                        <h6 className='substr mt-3 mb-4'><i className="ri-subtract-line"></i> OR <i className="ri-subtract-line"></i></h6>
                        <a className='text-decoration-none mb-5'>Continue as Riddhie Jethava</a>
                        <p>Already have an account?<a href="">Sign In</a></p>
                    </div>

                </div>
            )}
        </div>
    );
}

export default EventCondition;





