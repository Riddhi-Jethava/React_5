import React from 'react'

function Services({ services }) {
    return (
        <div>
            <div className="container-fluid border">
                <div className="row p-5">
                    <div className="col-lg-12 text-center p-5">
                        <h3>Louis Vuitton Services</h3>
                        <p>Louis Vuitton offers complementary wrapping on all orders, carefully packaged <br /> in the Maison's iconic boxes.</p>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-evenly text-center">
                        {
                            services.map(services => (
                                <div className="col-lg-3 shadow-sm pb-3">
                                    <div key={services.id}></div>
                                    <div>
                                        <img src={services.image} alt={services.title} className='w-100 mb-2'/>
                                        <p>{services.title}</p>
                                        <a href="" className='text-black me-4'>{services.discription}</a>
                                        <a href="" className='text-black'>{services.discription}</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
