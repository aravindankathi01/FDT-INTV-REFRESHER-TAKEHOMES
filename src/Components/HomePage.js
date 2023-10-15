import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border p-2 shadow-lg rounded-lg flex flex-col text-base font-semibold gap-1'>
        <Link to='/flags'>Country Info Display App</Link>
        <Link to='/counter'>Counter App</Link>
        <Link to='/flags'>Stop Watch</Link>
        <Link to='/form'>Full Name Display</Link>
        <Link to='/dropdown'>Location Selector App</Link>
        <Link to='/calculator'>React Calculator</Link>
      </div>
    </div>
  );
};

export default HomePage;
