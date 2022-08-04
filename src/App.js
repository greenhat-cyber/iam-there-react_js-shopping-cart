import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Products from './component/Products'
import Product from './component/Product'

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/products/:id' element={<Product/>} />

      </Routes>
    </div>
  )
}

export default App;
