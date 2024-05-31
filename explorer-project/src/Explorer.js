import React, { useState, useEffect } from 'react';

function Explorer() {
  // useState
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchingData();
  }, []);

  return (
    <div className='main' style={{ textAlign: 'center', padding: '10px' }}>
      {data.map((e, index) => (
        <div key={index} className='cartoon-page'>
          <center><img src={e.image} className='img' alt={e.title} /></center>
          <h4>{e.title}</h4>
          <h4>{e.year}</h4>
          <p>{e.creator}</p>
          <p>{e.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default Explorer;
