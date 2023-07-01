import React from 'react';
import television from '../components/assets/tv-video.m4v';

const Cart = () => {
  return (
    <div>
      <div className='h-[10px] bg-slate-700'></div>
      <div className='bg-black h-screen flex justify-center items-center px-[10px] gap-[50px]'>
        <div className='text-white flex flex-col gap-2 w-[450px]'>
          <div className='text-[40px] font-bold'>Enjoy on your TV</div>
          <div className='text-[22px]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
        </div>
        <div className='relative z-10 '>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv image"
            className='mt-9 z-20  sm:w-[520px] sm:h-[400px]'
          />

          <video className="xl:w-[380px] xl:h-[307px] lg:w-[370px] lg:h-[300px]  md:w-[280px] md:h-[220px] absolute xl:bottom-[52px] xl:left-[68px] sm:w-[220px] sm:h-[210px]  lg:bottom-[100px] lg:left-[120px] md:bottom-[60px] md:left-[90px] sm:bottom-[28px] sm:left-[60px]" autoPlay loop muted>
            <source src={television} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='h-[10px] bg-slate-700'></div>
    </div>
  );
}

export default Cart;
