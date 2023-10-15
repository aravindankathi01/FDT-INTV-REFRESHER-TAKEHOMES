import React, { useEffect, useState } from "react";

const Dropdown = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [countriesData, setCountriesData] = useState("");
  const [statesData, setStatesData] = useState("");
  const [citiesData, setCitiesData] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    fetchStates();
  }, [country]);

  useEffect(() => {
    fetchCities();
  }, [state]);
  async function fetchCountries() {
    try {
      const response = await fetch(
        "https://crio-location-selector.onrender.com/countries"
      );
      const data = await response.json();
      setCountriesData(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchStates() {
    try {
      const response = await fetch(
        `https://crio-location-selector.onrender.com/country=${country}/states`
      );
      const data = await response.json();
      setStatesData(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchCities() {
    try {
      const response = await fetch(
        `https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`
      );
      const data = await response.json();
      setCitiesData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='flex flex-col items-center h-screen mt-10 gap-4'>
      <h1 className='text-2xl font-semibold'>Select Location</h1>
      <div className='flex justify-center items-center gap-2 mt-10 text-base font-medium'>
        <select
          className='border-2 p-1 shadow-lg rounded-lg'
          value={country}
          onChange={(e) => setCountry(e.target.value)}>
          <option>Select Country</option>
          {countriesData &&
            countriesData.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
        </select>
        <select
          className='border-2 p-1 shadow-lg rounded-lg'
          value={state}
          onChange={(e) => setState(e.target.value)}>
          <option>Select State</option>
          {statesData &&
            statesData.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
        </select>
        <select
          className='border-2 p-1 shadow-lg rounded-lg'
          value={city}
          onChange={(e) => setCity(e.target.value)}>
          <option>Select City</option>
          {citiesData &&
            citiesData.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
        </select>
      </div>
      <p className='text-sm text-slate-600'>
        <span className='font-semibold text-base'>You selected, </span>
        <span className='font-bold text-base'>{city}, </span>
        {state}, {country}
      </p>
    </div>
  );
};

export default Dropdown;
