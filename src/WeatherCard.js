<<<<<<< HEAD
import React from 'react';
import './index.css';

const WeatherCard = ({ weatherData }) => {
    const { cityName, temperature, humidity, weatherText } = weatherData;
  
    return (
      <div className="card">
        <h3 className="city">{cityName}</h3>
        <div className="temp-gauge">
          <div className="circle">
            <div className="bar" style={{ transform: `rotate(${(temperature / 60) * 180}deg)` }}></div>
            <div className="cover">{temperature}°C</div>
          </div>
        </div>
        <div className='info'>
        <div className='temp'><p className="temperature">{temperature}°C</p></div>
        <div className='ext'><p className="extra-info">Humidity: {humidity}%</p>
        <p className="extra-info">{weatherText}</p></div>
        </div>
      </div>
    );
  };


export default WeatherCard;
=======
import React from 'react';
import './index.css';

const WeatherCard = ({ weatherData }) => {
    const { cityName, temperature, humidity, weatherText } = weatherData;
  
    return (
      <div className="card">
        <h3 className="city">{cityName}</h3>
        <div className="temp-gauge">
          <div className="circle">
            <div className="bar" style={{ transform: `rotate(${(temperature / 60) * 180}deg)` }}></div>
            <div className="cover">{temperature}°C</div>
          </div>
        </div>
        <div className='info'>
        <div className='temp'><p className="temperature">{temperature}°C</p></div>
        <div className='ext'><p className="extra-info">Humidity: {humidity}%</p>
        <p className="extra-info">{weatherText}</p></div>
        </div>
      </div>
    );
  };


export default WeatherCard;
>>>>>>> 86d63f90050941f763c17b59f955c0328b2e6f2c
