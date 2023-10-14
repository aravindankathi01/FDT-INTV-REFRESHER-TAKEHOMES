import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    doctor: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <form
        className='flex flex-col gap-2 justify-center items-center mb-3'
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmit(true);
        }}>
        <div className='flex gap-2 items-center'>
          <label htmlFor='firstName'>First name:</label>
          <input
            className='border shadow-lg rounded-lg p-2'
            type='text'
            name='firstName'
            id='firstName'
            value={formData.firstName}
            onChange={handleChange}></input>
        </div>
        <div className='flex gap-2 items-center'>
          <label htmlFor='lastName'>Last name:</label>
          <input
            className='border shadow-lg rounded-lg p-2'
            type='text'
            name='lastName'
            id='lastName'
            value={formData.lastName}
            onChange={handleChange}></input>
        </div>
        <button className='border shadow-lg rounded-lg px-2'>Submit</button>
      </form>
      {isSubmit && (
        <h1 className='text-xl font-bold'>
          <span className='font-normal'>Fullname: </span>
          {formData.firstName + " " + formData.lastName + " " + formData.doctor}
        </h1>
      )}
    </div>
  );
};

export default Form;
