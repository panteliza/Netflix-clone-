import React from 'react'

export default function Main3() {
  return (
    <div className='bg-black  flex flex-col py-[90px] items-center '>
    <div className='text-white font-extrabold text-[45px]'>Frequently Asked Questions</div>
    <div className='mt-4 flex flex-col gap-2'>
      <div className='bg-gray-800 flex justify-between px-5 w-[900px] h-[80px] items-center text-[25px] hover:bg-slate-700'>
        <div className='text-white'>What is Netflix</div>
        <div className='text-white'>+</div>
      </div>
      <div className='bg-gray-800 flex justify-between px-5 w-[900px] h-[80px] items-center text-[25px] hover:bg-slate-700 '>
        <div className='text-white'>How much does Netflix cost?</div>
        <div className='text-white'>+</div>
      </div>
      <div className='bg-gray-800 flex justify-between px-5 w-[900px] h-[80px] items-center text-[25px] hover:bg-slate-700 '>
        <div className='text-white'>Where can I watch?</div>
        <div className='text-white'>+</div>
      </div>
      <div className='bg-gray-800 flex justify-between px-5 w-[900px] h-[80px] items-center text-[25px] hover:bg-slate-700 '>
        <div className='text-white'>How do I cancel?</div>
        <div className='text-white'>+</div>
      </div>
      <div className='bg-gray-800 flex justify-between px-5 w-[900px] h-[80px] items-center text-[25px] hover:bg-slate-700 '>
        <div className='text-white'>How much does Netflix cost?</div>
        <div className='text-white'>+</div>
      </div>
      <div className='bg-gray-800 flex justify-between px-5 w-[900px] h-[80px] items-center text-[25px] hover:bg-slate-700 '>
        <div className='text-white'>What can I watch on Netflix?</div>
        <div className='text-white'>+</div>
      </div>
      <div className='bg-gray-800 flex justify-between px-5 w-[900px] h-[80px] items-center text-[25px] hover:bg-slate-700 '>
        <div className='text-white'>Is Netflix good for kids?</div>
        <div className='text-white'>+</div>
      </div>
    </div>
    <div className='flex flex-col items-center mt-[50px]'>
      <div className='text-white text-[20px]'>Ready to watch? Enter your email to create or restart your membership.
</div>
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
  )
}
