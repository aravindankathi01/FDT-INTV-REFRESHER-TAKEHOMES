import React, { useEffect, useState } from "react";
import secondsFormatter from "../utils/secondsFormatter";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      console.log(interval);
      clearInterval(interval);
    };
  }, [isRunning]);

  function startTimer() {
    setIsRunning(!isRunning);
  }

  function resetTimer() {
    setIsRunning(false);
    setTime(0);
  }
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen'>
      <h1 className='text-3xl font-bold'>Stop watch</h1>

      <div className='flex justify-center gap-2 text-xl font-normal'>
        <p className='font-medium'>Timer :</p>
        <p>{secondsFormatter(time)}</p>
      </div>
      <div className='flex gap-2 justify-center text-xl font-medium'>
        <button
          className='border shadow-lg p-1 px-2 rounded-lg'
          onClick={startTimer}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className='border shadow-lg p-1 px-2 rounded-lg'
          onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
