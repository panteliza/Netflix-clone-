import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className='bg-[url("https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg")] object-cover h-screen min-h-[690px] bg-cover'>
      <div className='min-h-[690px] bg-black bg-opacity-40 bg-cover flex justify-center items-center h-screen'>
        <div className='w-[500px] h-[650px] bg-black bg-opacity-70 flex justify-center items-center relative'>
          <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <div className='flex flex-col items-center'>
              <h2 className='text-4xl font-bold text-white mb-6'>Sign In</h2>
              <input
                type='email'
                className='bg-transparent bg-opacity-90 rounded border border-white text-white w-[350px] h-[55px] pl-3 text-[17px] mb-4'
                placeholder='Email address'
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type='password'
                className='bg-transparent bg-opacity-90 rounded border border-white text-white w-[350px] h-[55px] pl-3 text-[17px] mb-4'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
              />
               <Link to="movies">
              <button
                type='submit'
                className='bg-red-500 text-white px-6 py-3 rounded w-[350px]'
              >
               
                Sign In
               
              </button>
              </Link>
              <div className='flex gap-[150px]'>
                <div className='flex'>
                  <input type='checkbox' />
                  <h1 className='text-white'>Remember me</h1>
                </div>
                <div className='text-white'>Need Help?</div>
              </div>
            </div>
            <div className='flex gap-1 pl-16'>
              <h1 className='text-white'>New to Netflix? </h1>
              <h1 className='text-white font-bold'>Sign up Now</h1>
            </div>
            <div className='flex gap-1 pl-16 pr-7'>
              <h1 className='text-white'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <span style={{ color: 'blue' }}>Learn More</span>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
