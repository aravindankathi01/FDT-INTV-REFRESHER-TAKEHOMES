import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=c5b7bbc4740d403881082212231609&q=${location}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(weatherData);

  return (
    <div className='w-[80vw] mx-auto flex flex-col justify-center items-center mt-10'>
      <div>
        <input
          type='text'
          name='location'
          placeholder='Search by location'
          value={location}
          className='border shadow-lg rounded-lg p-2'
          onChange={(e) => {
            setLocation(e.target.value);
          }}></input>
        <button
          className='border shadow-lg rounded-lg p-2'
          onClick={() => {
            fetchWeather();
          }}>
          Search
        </button>
      </div>
      {weatherData && <WeatherCard {...weatherData.current} />}
    </div>
  );
};

export default WeatherApp;
// c5b7bbc4740d403881082212231609
// https://api.weatherapi.com/v1/current.json?key=c5b7bbc4740d403881082212231609&q=London&aqi=no

// temp_c;
// humidity;
// condition.text;
// wind_kph;
