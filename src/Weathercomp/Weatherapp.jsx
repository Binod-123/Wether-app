import React, { useState } from 'react';
import axios from 'axios';
import searchicon from '../assets/search.png';
// import drizzle from '../assets/drizzel.png';
// import rainicon from '../assets/rain.png';
// import snowicon from '../assets/snow.png';
 import wind from '../assets/wind.png';
 import humidity from '../assets/humidity.png';
// import clearicon from '../assets/clear.png';
 import cloudicon from '../assets/cloud.png';
import './Weatherapp.css'

function Weatherapp() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');

  const apiKey = "8f77cbfe2c696280efac043f011888ef";

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const search = () => {
    fetchWeatherData();
  };

  
  return (
    <div className='container'>
      <div className='top-bar'>
        <input
          type="text"
          className='cityInput'
          placeholder='Enter City Name .......'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <div className='search-container'>
          <img src={searchicon} alt='Search' onClick={search} />
        </div>
      </div>
      {weatherData && (
        <>
          <div className="weather-image">
            <img src={cloudicon} alt="Weather" />
          </div>
          <div className="weather-temp">{weatherData.main.temp}°C</div>
          <div className="weather-location">{weatherData.name}</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity} alt="Humidity" className="icon" />
              <div className="data">
                <div className="humidity-percent">{weatherData.main.humidity}%</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={wind} alt="Wind" className="icon" />
              <div className="data">
                <div className="humidity-percent">{weatherData.wind.speed} km/h</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Weatherapp