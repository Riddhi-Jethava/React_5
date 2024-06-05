
import React, { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('<https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London>');
      const data = await response.json();
      setWeather(data.current);
    };

    fetchData();
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather in London</h1>
      <p>Temperature: {weather.temp_c}°C</p>
      <p>Condition: {weather.condition.text}</p>
    </div>
  );
}

export default Weather
