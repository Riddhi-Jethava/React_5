import React from 'react'
import { FaStar } from "react-icons/fa";

const products = [
  { id: 1, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-14.jpg', name: 'CLEW', price: '$15', big : false },
  { id: 2, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7.jpg', name: 'VASE', price : '$210', big : false  },
  { id: 3, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-17.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 4, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 5, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 6, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-19.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 7, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-20.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 8, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 9, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-22.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 10, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 11, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-14.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 12, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 13, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-17.jpg', name: 'CLEW', price : '$200', big : false  },
  { id: 14, img: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3.jpg', name: 'CLEW', price : '$200', big : false  }
];

function Home2() {
  return (
    <div className='slider'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-5">
            {/* slider */}
          </div>

          <div className="col-lg-12" id='products'>
            <div className="row justify-content-between">
              {
                products.map((product) => (
                    <div className={`col-lg-${product.id === 3 ? 6 : 3} p-4`} id={`container${products % 4 === 0 ? '' : '-four'}`} key={product.id}>
                        <img src={product.img} alt="" className='image w-100 d-block h-100' />
                        <div class="middle">
                          <div class="text">CLEW</div>
                          <div>
                            <h6><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <br />
                              $200
                            </h6>
                          </div>
                          <h6></h6>
                        </div>
                      </div>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
