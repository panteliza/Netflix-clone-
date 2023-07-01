import React from 'react'
import abc from '../components/assets/mobile (1).gif'

const Main1 = () => {
  return (
    <div>
      
      <div className='bg-black h-screen flex justify-center items-center px-[10px] gap-[40px] '>
      <div className=''><img src={abc}
         alt="mobile image"/>
        </div>
        <div className='text-white flex flex-col gap-2 w-[450px]'>
          <div className='text-[40px] font-bold'>Download your shows to watch offline</div>
          <div className='text-[22px]'>Save your favorites easily and always have something to watch.</div>
        
        
        </div>
       
      </div>
      <div className='h-[10px] bg-slate-700'></div>
      <div className='bg-black flex pl-[250px] h-[400px] items-center'>
      <div className='text-white flex flex-col gap-1 w-[380px]'>
          <div className='text-[40px] font-bold'>Watch</div>
          <div className='text-[40px] font-bold'>everywhere</div>
          <div className='text-[22px]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
        
        
        </div>

      </div>
      <div className='h-[10px] bg-slate-700'></div>
    </div>
  )
}

export default Main1