import React from 'react';
import './globals.css';

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#FCE4EC] via-[#FFB7C5] to-[#FFD1DC] text-gray-800 px-4">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-[#FCE4EC] via-[#FFB7C5] to-[#FFD1DC] mb-8 drop-shadow-md shiny-text">
        NST.Tinder<span className="text-white">💖</span>
      </h1>

      <p className="text-xl sm:text-2xl text-center max-w-2xl mb-8 font-bold tracking-wide opacity-60">
        Where connections are coded, not just destined.  
        <br />
        The official matchmaker of Newton School of Technology is loading...
      </p>

      <p className="mt-10 text-sm text-gray-700 italic text-center font-light">
        Built by the students of Newton. Loved by Newton.
      </p>
    </div>
  );
};

export default ComingSoon;
