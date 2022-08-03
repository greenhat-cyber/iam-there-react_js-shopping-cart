import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Products from './component/Products'

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products' element={<Products/>} />

      </Routes>
    </div>
  )
}

export default App;
