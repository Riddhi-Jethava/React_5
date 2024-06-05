import React from 'react'

function PreFall(prefall) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-lg-12 text-center">
            <span style={{ fontSize: "12px" }}>MEN</span>
            <h4 className='mt-2 mb-3'>Pre-Fall 2024</h4>
            <a href="" className='text-black mb-5' style={{ fontSize: "14px" }}>Discover the Collection</a>
          </div>
          <div className="col-lg-12 p-0 m-0" id='prefall'>
            <video controls autoPlay muted style={{ width: "100%" }} className='w-100 p-0 m-0' >
              <source src='https://lv-vod.fl.freecaster.net/vod/louisvuitton/0yEBDEd2uw_HD.mp4' type='video/mp4' />
            </video>
          </div>
          <div className="col-lg-12">
            {
              prefall.map(prefall => (
                <div>
                  <h4 key={prefall.id}></h4>
                  <div>
                    <img src={prefall.image} alt="" />
                    <h6>{prefall.title}</h6>
                    <a href="">{prefall.discription}</a>
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

export default PreFall
