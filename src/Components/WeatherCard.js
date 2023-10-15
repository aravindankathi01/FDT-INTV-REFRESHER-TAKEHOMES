import React from "react";

const WeatherCard = ({ temp_c, humidity, condition, wind_kph }) => {
  return (
    <div className='grid grid-cols-2 mt-10 gap-6'>
      <div className='flex flex-col justify-center items-center gap-1 shadow-lg border p-8 py-4 rounded-lg'>
        <h1 className='font-semibold text-lg'>Temperature</h1>
        <p className='text-base font-normal'>{temp_c}°C</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-1 shadow-lg border p-8 py-4 rounded-lg'>
        <h1 className='font-semibold text-lg'>Humidity</h1>
        <p className='text-base font-normal'>{humidity}%</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-1 shadow-lg border p-8 py-4 rounded-lg'>
        <h1 className='font-semibold text-lg'>Condition</h1>
        <p className='text-base font-normal'>{condition.text}</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-1 shadow-lg border p-8 py-4 rounded-lg'>
        <h1 className='font-semibold text-lg'>Wind speed</h1>
        <p className='text-base font-normal'>{wind_kph}kph</p>
      </div>
    </div>
  );
};

export default WeatherCard;
