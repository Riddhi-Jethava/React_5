import React from 'react'
import { useState, useEffect } from 'react'

function Counter() {

    const [count, setCount] = useState(7200)
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(ps => ps - 1)
        }, 500);
        return () => clearInterval(timer)

    }, [])

    function ShowTime() {

        const hour = Math.floor((count / 3600))
        const minute = Math.floor((count % 3600) / 60)
        const seconds = Math.floor((count % 60))

        const formattedHours = String(hour).padStart(2, 0);
        const formattedMinutes = String(minute).padStart(2, 0);
        const formattedSeconds = String(seconds).padStart(2, 0);

        // document.getElementById("hourOut").innerHTML = formattedHours

        return (
            <div className='row justify-content-evenly'>
                <div className='col-lg-2 border p-4 rounded fs-2 text-center' id='hourOut'>
                    {formattedHours}
                </div>

                <div className='col-lg-2 border p-4 rounded fs-2 text-center'>
                    {formattedMinutes}
                </div>

                <div className='col-lg-2 border p-4 rounded fs-2 text-center'>
                    {formattedSeconds}
                </div>
            </div>
        )

    }

    return (
        <div className='d-flex align-items-center ' id='main'>
            <div className='container border rounded'>
                <div className='row justify-content-evenly'>
                    <div className='col-lg-12 text-center p-5'>
                        <h5>WE'RE LAUNCHING SOON</h5>
                    </div>
                    <ShowTime />
                </div>

                <center>
                    <button onClick={() => setCount(7200)} className='w-auto bg-transparent text-white ps-4 pe-4 pt-2 pb-2 rounded m-5'>Restart</button>
                </center>

            </div>
        </div>
    )
}

export default Counter
