import React from "react";
import { Link } from "react-router-dom";
import Video from "../../VideoJS/Video/Video";

const Home = () => {
  return (
    <div>
      <div className='container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center '>
      <div className='w-full lg:w-1/2'>
        <div className='lg:max-w-lg'>
          <h1 className='text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl'>
            Find garden fresh Vegetable Straight to your hand
          </h1>
          <p className='mt-4 text-gray-600 '>
            We work with the best fermers to ensure best can be deliverd to your
            kitchen
          </p>
          <div className='grid gap-6 mt-8 sm:grid-cols-2'>
            <div className='flex items-center text-gray-800 -px-3'>
              <svg
                className='w-5 h-5 mx-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>

              <span className='mx-3'>Garden Fresh</span>
            </div>

            <div className='flex items-center text-gray-800 -px-3'>
              <svg
                className='w-5 h-5 mx-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>

              <span className='mx-3'>Organic Product</span>
            </div>

            <div className='flex items-center text-gray-800 -px-3'>
              <svg
                className='w-5 h-5 mx-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>

              <span className='mx-3'>100% free of chemical</span>
            </div>

            <div className='flex items-center text-gray-800 -px-3'>
              <svg
                className='w-5 h-5 mx-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>

              <span className='mx-3'>DoorStep Delivery</span>
            </div>

            <div className='flex items-center text-gray-800 -px-3'>
              <svg
                className='w-5 h-5 mx-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>

              <span className='mx-3'>Payment Security</span>
            </div>

            <div className='flex items-center text-gray-800 -px-3'>
              <svg
                className='w-5 h-5 mx-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>

              <span className='mx-3'>Fast shipping (+ Express)</span>
            </div>
          </div>
          <Link to='products'>
            <button className='btn btn-outline bg-yellow-500 mt-5 border-none'>
              Explore Now
            </button>
          </Link>
        </div>
      </div>

      <div className='flex items-center justify-center w-full h-96 lg:w-1/2'>
        <img
          className='object-cover w-full h-full max-w-2xl rounded-md'
          src='https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg'
          alt='glasses'
        />
      </div>
      </div>
      <h3 className="text-4xl font-semibold my-5">How We Collect</h3>
      <p className="text-xl my-3">Watch how we collect garden fresh vegetable directly from our farmer</p>
      <Video></Video>
    </div>
  );
};

export default Home;
