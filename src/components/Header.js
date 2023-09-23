import React from 'react';
import { Link } from 'react-router-dom';
import abc from './assets/Netflix-Logo.png';

const Header = () => {
  return (
    <div className='bg-[url("https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg")]  min-h-[690px] bg-cover'>
      <div className='min-h-[690px] bg-black bg-opacity-70 bg-cover'>
        <div className='flex justify-around items-center text-white'>
          <div className=''>
            <img src={abc} className='w-40 h-24' alt='Netflix Logo' />
          </div>
          <div>
            <button className='bg-red-500 text-white px-2 py-1 rounded'>
              <Link to="/login">Sign in</Link>
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[7px] justify-between items-center mt-[150px]'>
          <h1 className='text-white font-bold text-[50px] leading-[5rem]'>Unlimited movies, TV shows, and more</h1>
          <p className='text-white font-semibold text-2xl leading-[1.5rem]'>Plans now start at USD 2.99/month</p>
          <br />
          <p className='text-white text-xl leading-[1.2rem]'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex gap-2 mt-4'>
            <input
              type='text'
              className='bg-gray-500 bg-opacity-80 rounded border border-white text-white w-[350px] h-[55px] pl-3 text-[17px]'
              placeholder='Email address'
            />
            <div>
              <button className='bg-red-500 flex gap-1 items-center pl-2 pr-3 h-[55px] w-[170px] rounded justify-center'>
                <div className='text-white text-[22px] py-2'>Get Started</div>
                <div className='text-white rotate-90'>^</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
