import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Signin from './components/Signin'
import Movies from './components/Movies'
import Play from './components/Play'


export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/login/movies' element={<Movies/>}/>
        <Route path='/login/movies/video' element={<Play/>}/>
        
        

        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
