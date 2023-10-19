import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-2'>
      <h1 className='text-2xl font-bold'>FDT INTV REFRESHER TAKEHOMES</h1>
      <div className='border p-2 shadow-lg rounded-lg flex flex-col text-base font-semibold gap-1'>
        <Link to='/flags'>Country Info Display App</Link>
        <Link to='/counter'>Counter App</Link>
        <Link to='/stopwatch'>Stop Watch</Link>
        <Link to='/form'>Full Name Display</Link>
        <Link to='/dropdown'>Location Selector App</Link>
        <Link to='/calculator'>React Calculator</Link>
        <Link to='/spellcheck'>Spell Check and Auto-Correction</Link>
        <Link to='/dictionary'>Dictionary Application</Link>
      </div>
    </div>
  );
};

export default HomePage;
