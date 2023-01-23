import React from "react";
import { Link } from "react-router-dom";

const EmptyAlert = () => {
  return (
    <div className='alert shadow-lg mx-32 my-10'>
      <div >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='stroke-info flex-shrink-0 w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <span>No Product in cart! Add atleast one.</span>
      </div>
      <div className='flex-none'>
        <Link to='/Products'><button className='btn btn-sm btn-primary'>Add one</button></Link>
      </div>
    </div>
  );
};

export default EmptyAlert;
