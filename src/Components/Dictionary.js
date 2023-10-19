import React, { useState } from "react";

const DICT = {
  react: "A JavaScript library to build user interfaces",
};

const Dictionary = () => {
  const [searchValue, setSearchValue] = useState("");
  const [def, setDef] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (DICT[searchValue.toLowerCase()]) {
      setDef(DICT[searchValue.toLowerCase()]);
    } else {
      setDef("not found");
    }
  }
  return (
    <div className='flex flex-col items-center justify-center gap-3 h-screen w-fit mx-auto'>
      <h1 className='text-xl font-bold'> Dictionary App</h1>
      <form
        className='flex gap-1 w-full justify-between'
        onSubmit={handleSubmit}>
        <input
          className='border-2 border-black rounded-lg p-1'
          type='text'
          value={searchValue}
          placeholder='Search'
          name='search'
          onChange={(e) => setSearchValue(e.target.value)}></input>
        <button className='border-2 border-black bg-slate-100 p-1 rounded-md font-medium'>
          submit
        </button>
      </form>
      <h1 className='text-start w-full font-semibold text-lg'>Definition</h1>
      <p className='font-medium w-full text-start'>{def}</p>
    </div>
  );
};

export default Dictionary;
