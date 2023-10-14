import React, { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const avaliableInputs = [
    7,
    8,
    9,
    "+",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "*",
    "C",
    0,
    "=",
    "/",
  ];
  // function handleClick(input) {
  //   // setExpression((prev) => {
  //   //   return prev + input;
  //   // });
  //   setExpression(input);
  // }
  return (
    <>
      <h1 className='text-2xl font-bold'>React Calculator</h1>
      <h1 className='border shadow-2xl bg-slate-50 rounded-md p-2 w-44 h-11'>
        {expression}
      </h1>
      <div className='grid grid-cols-4 gap-3'>
        {avaliableInputs.map((input, index) => {
          return (
            <button
              className='border-2 border-slate-200 rounded-lg bg-gray-200 font-semibold text-xl shadow-xl p-2 px-4'
              onClick={() =>
                setExpression((prev) => {
                  if (input === "=") {
                    setExpression(eval(prev));
                  } else if (input === "C") {
                    setExpression("");
                  } else {
                    return prev.toString() + input;
                  }
                })
              }
              key={index}>
              {input}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Calculator;
