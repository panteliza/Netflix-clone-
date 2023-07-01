import React from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { AiFillCaretDown } from 'react-icons/ai';
export default function Footer() {
  return (
    <div>
      <div className='h-[10px] bg-slate-700'></div>
      <div className='flex gap-[250px] bg-black pl-[100px] py-[60px]'>
        <div className='flex flex-col gap-3 text-white'>
          <ul>
            <li className='text-white underline  '>Questions? Contact Us
            </li>
            </ul>
            <br/>
            <div className=' '>
              <ul className='flex flex-col gap-2'>
            <li className='text-white underline  '>FAQ
            </li>
            <li className='text-white underline  '>Media Center
            </li>
            <li className='text-white underline  '>Ways to Watch
            </li>
            <li className='text-white underline  '>Cookie Preferences
            </li>
            <li className='text-white underline  '>Speed Test
            </li>
            </ul>
            </div>
            <br/>
            <button className='border border-white rounded flex items-center justify-center gap-3 h-[30px] w-[120px]'>
              <div><TfiWorld/></div>
              <div>English</div>
              <div><AiFillCaretDown/></div>
            </button>
            <div>Netflix Nepal</div>
            
          
        </div>
        <div className='flex flex-col gap-3 text-white'>
        <div className='mt-[70px] '>
              <ul className='flex flex-col gap-2'>
            <li className='text-white underline  '>Help Center
            </li>
            <li className='text-white underline  '>Investor Relations
            </li>
            <li className='text-white underline  '>Terms of Use
            </li>
            <li className='text-white underline  '>Corporate Information
            </li>
            <li className='text-white underline  '>Legal Notices
            </li>
            </ul>
            </div>
        </div>
        <div className='flex flex-col gap-3 text-white'>
        <div className='mt-[70px] '>
              <ul className='flex flex-col gap-2'>
            <li className='text-white underline  '>Account
            </li>
            <li className='text-white underline  '>Jobs
            </li>
            <li className='text-white underline  '>Privacy
            </li>
            <li className='text-white underline  '>Contact Us
            </li>
            <li className='text-white underline  '>Only on Netflix
            </li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
