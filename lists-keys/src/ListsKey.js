import React from 'react'

function ListsKey(props) {

  return (
    <>
      <div className='main'>
        <div>
          <nav>
            <h2 style={{ color: "lightgrey", marginLeft: "-10%", marginRight: "15%" }}>T I T A N</h2>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">SHOP</a>
            <a href="">MEN</a>
            <a href="">WOMEN</a>
            <a href="">ALL</a>
            <a href="">BLOG</a>
            <a href="">CONTACT</a>
          </nav>
        </div>
        <div>
          <h2>Men's Watch Collection</h2>
          <ul>
            {
              props.products.map((el) => (
                <li key={el.id}>
                  <img src={el.Image} alt="" />
                  <h4>{el.Title}</h4>
                  <h3>{el.Price}</h3>
                  <h6>Colour : {el.Color}</h6>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default ListsKey
