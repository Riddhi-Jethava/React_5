import React from 'react'

function Creations({products}) {

    return (
        <div>
            <div className="container-fluid pt-5 ">
                <div className="row pt-3">
                    <div className="col-lg-12 text-center p-4">
                        <h4>Explore a Selection of the Maison's Creations</h4>
                    </div>
                    <div className="col-lg-12 d-flex flex-wrap justify-content-evenly p-5 ">
                        {
                            products.map(products => (
                                <div className='col-lg-3 col-md-6 col-sm-12 col-12 product shadow-sm p-2 bg-white'>
                                    <div key={products.Id}>
                                        <img src={products.image} alt={products.title} className='w-100 border m-auto' />
                                        <h6 className='p-2'>{products.title}</h6>
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

export default Creations
