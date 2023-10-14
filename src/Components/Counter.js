import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-xl font-medium'>Counter : {counter}</h1>

      <div className='flex gap-2'>
        <button
          className='border-2 shadow-lg rounded-lg px-2 font-semibold text-2xl'
          onClick={() => {
            setCounter(counter + 1);
          }}>
          +
        </button>
        <button
          className='border-2 shadow-lg rounded-lg px-2 font-semibold text-2xl'
          onClick={() => {
            setCounter(counter - 1);
          }}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
