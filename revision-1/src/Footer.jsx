import React from 'react'

function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3 p-5 footer" style={{fontSize: "13px"}}>
                <h6>HELP</h6>
                <a>A Client Advisor is available at <a href=""> 1800 103 9988</a>. You can also <a href="">chat</a> or <a href="">email</a> us.</a>
                <a>FAQ's</a>
                <a>Product Care</a>
                <a>Stores</a>
              </div>
              <div className="col-lg-3 p-5 footer"  style={{fontSize: "13px"}}>
                <h6>SERVICES</h6>
                <a href="">Repairs</a>
                <a href="">Personalisation</a>
                <a href="">Art of Gifting</a>
                <a href="">Download our Apps</a>
              </div>
              <div className="col-lg-3 p-5 footer"  style={{fontSize: "13px"}}>
                <h6>ABOUT LOUIS VUITTON</h6>
                <a href="">Fashion Shows</a>
                <a href="">Arts & Culture</a>
                <a href="">La Maison</a>
                <a href="">Sustainability</a>
                <a href="">Latest News</a>
                <a href="">Careers</a>
                <a href="">Foundation Louis Vuitton</a>
              </div>
              <div className="col-lg-3 p-5 footer"  style={{fontSize: "13px"}}>
                <h6>CONNECT</h6>
                <p><a href="">Sign up</a> for first access to latest collections, campaigns and videos.</p>
                <a href="">Follow Us</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-lg-12">
            <div className="row justify-content-evenly">
              <div className="col-lg-5 p-5" style={{fontSize: "12px"}}>
                <img src="https://in.louisvuitton.com/flags/in.svg" alt="" style={{width: "20px"}}/> <a href="" className='text-black fs-6'>India</a>
                <p className='mt-4'>Full Name and Address of the Manufacturer</p>
                <p className='location'>
                  Louis Vuitton Malletier SAS <br />
                  2 Rue du Pont Neuf <br />
                  75034 Paris CEDEX 01 <br />
                  FRANCE <br /><br />
                  Please refer to the product label for specific country of origin for each product.
                </p>
              </div>
              <div className="col-lg-3 p-5" style={{fontSize: "12px"}}>
                <p className='mt-5'>Full Name and Address of the Importer</p>
                <p className='location'>
                  Louis Vuitton India Retail Private Limited <br/>
                  901A Ninth Floor, Time Tower, MG Road <br />
                  Gurgaon, Haryana - 122002 <br />
                  INDIA
                </p>
              </div>
              <div className="col-lg-2 p-5">
                <a href="" className='text-decoration-none text-black me-3' style={{ fontSize: "12px" }}>Sitemap</a> <a href="" className='text-decoration-none text-black' style={{ fontSize: "12px" }}>Legal & Privacy</a>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center p-3">
            <h4 style={{fontFamily : "Sarif"}}>LOUIS  VOITTON</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
