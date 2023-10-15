import React, { useEffect, useState } from "react";

const Flags = () => {
  const [flagsData, setFlagsData] = useState(null);
  const [filteredFlags, setFilteredFlags] = useState(null);
  const [searchFlag, setSearchFlag] = useState("");

  useEffect(() => {
    fetchFlags();
  }, []);

  async function fetchFlags() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setFlagsData(data);
      setFilteredFlags(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    const filtered = flagsData.filter((country) => {
      const formatted =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      return country.name.common.startsWith(formatted);
    });
    setFilteredFlags(filtered);
    setSearchFlag(e.target.value);
  }
  //   console.log("flagsData", flagsData);
  return (
    <div className='w-[80vw] mx-auto flex flex-col items-center gap-4 mt-5'>
      <input
        className='border shadow-lg rounded-lg p-2 w-[50%]'
        type='text'
        placeholder='Search Country'
        value={searchFlag}
        onChange={handleChange}></input>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 place-content-center place-items-center md:w-[80vw] mx-auto'>
        {filteredFlags &&
          filteredFlags.map((country) => {
            return (
              <div
                kay={country.tld}
                className='flex flex-col justify-between items-center p-1 border rounded-lg shadow-xl w-32 gap-1'>
                <img
                  src={country.flags.svg}
                  alt={country.name.common}
                  className='w-24 h-16 object-cover'></img>
                <h1 className='text-sm font-semibold text-center'>
                  {country.name.common}
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Flags;
