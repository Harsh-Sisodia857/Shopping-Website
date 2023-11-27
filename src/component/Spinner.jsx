import React from 'react';
import '../App.css';

function Spinner() {
  return (
    <div className='flex items-center justify-center my-10'>
      <div className="custom-loader"></div>
    </div>
  );
}

export default Spinner