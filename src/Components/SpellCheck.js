import React, { useState } from "react";

const spellCheck = {
  teh: "the",
  at: "an",
  Symol: "symbol",
};

const SpellCheck = () => {
  const [text, setText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
    const str = e.target.value;
    let l = str.split(" ");
    const suggested = l.map((word) => {
      if (spellCheck[word]) {
        return spellCheck[word];
      } else {
        return "";
      }
    });
    console.log(suggested);
    setSuggestedText(suggested.join(" "));
  }
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-3 h-screen w-fit mx-auto'>
        <h1 className='text-2xl font-medium'>
          Spell Check and Auto-Correction
        </h1>
        <textarea
          className='border-2 rounded-lg shadow-lg p-2 text-lg font-normal'
          onChange={handleChange}
          value={text}
          rows={4}
          cols={60}
          placeholder='Enter text ...'></textarea>
        <p className='text-start w-full p-2 font-medium'>
          Did you mean:
          <span className='text-base font-bold'> {suggestedText}</span>
        </p>
      </div>
    </>
  );
};

export default SpellCheck;
