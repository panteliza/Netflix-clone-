import React from 'react'
import abc from './assets/Netflix-Logo.png';

import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"

const Top= () => {
    return (
        <nav className="bg-black flex justify-between items-center pl-[15px] pr-[15px] ">

            <img className='w-32 h-16' src={abc} alt="logo" />

            <div className='flex text-white gap-4 items-center font-semibold'>
                <Link to="/tvshows" >TV Shows</Link>
                <Link to="/movies" >Movies</Link>
                <Link to="/recent" >Recently Added</Link>
                <Link to="/mylist" >My List</Link>
          

            <ImSearch />
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className='w-10 h-10'/>     

        </nav>
    )
}

export default Top