import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Photo from './pages/Photo'

const App = () => {
  return (
   <div className='h-screen' data-theme='lemonade'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/photo" element={<Photo />} />
   </Routes>
   </div>
  )
}

export default App