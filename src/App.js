import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './index.css';

const API_KEY = 'VpM5S23cX36EVdyQ3LTlaD1swgPM3wQ8';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search`, {
        params: {
          apikey: API_KEY,
          q: city,
        }
      });

      const locationKey = response.data[0].Key;

      const weatherResponse = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
        params: {
          apikey: API_KEY,
        }
      });

      const data = {
        cityName: response.data[0].LocalizedName,
        temperature: weatherResponse.data[0].Temperature.Metric.Value,
        humidity: weatherResponse.data[0].RelativeHumidity,
        weatherText: weatherResponse.data[0].WeatherText,
      };

      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError('Error fetching weather. Try again.');
      console.error('Error fetching weather:', error);
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const getBackgroundClass = () => {
    if (!weatherData) return 'default-bg';
    switch (weatherData.weatherText.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return 'clear-bg';
      case 'cloudy':
      case 'some clouds':
      case 'mostly cloudy':
      case 'partly cloudy':
        return 'cloudy-bg';
      case 'rain':
      case 'showers':
      case 'shower':
        return 'rainy-bg';
      case 'snow':
      case 'hail':
      case 'sleet':
      case 'cold':
      case 'extreme cold':
      case 'freezing rain':
        return 'snowy-bg';
      case 'thunderstorms':
      case 'thunderstorm':
        return 'thunderstorm-bg';
      case 'fog':
      case 'light fog':
      case 'heavy fog':
      case 'mist':
      case 'misty':
      case 'drizzle':
      case 'haze':
      case 'smoke':
        return 'fog-bg';
      case 'dust':
      case 'sandstorm':
        return 'dust-bg';
      case 'dust':
      case 'sandstorm':          
        return 'dust-bg';
      case 'windy':
      case 'blustery':
        return 'windy-bg';
      case 'hurricane':
      case 'tropical storm':
        return 'hurricane-bg';
      case 'tornado':
        return 'tornado-bg';
      default:
        return 'default-bg';
    }
  };

  return (
    <div className={`app-container ${getBackgroundClass()}`}>
      <div className="weather-box">
        <h1 className="app-title">HOW'S THE SKY?</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="City"
            className="city-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="search-btn"
          >
            Search
          </button>
        </form>
        {error && <p className="error-msg">{error}</p>}
        {weatherData && (
          <div className="weather-info">
            <WeatherCard weatherData={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;