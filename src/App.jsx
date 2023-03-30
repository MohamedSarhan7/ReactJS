import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import MyNavbar from './components/MyNavbar/MyNavbar'
import MyFooter from './components/MyFooter/MyFooter'
import Task1 from './components/Day2/Task1/Task1'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import ProductItem from './components/ProductItem/ProductItem'
import ProductForm from './components/ProductForm/ProductForm/ProductForm'
import Products from './components/Products/Products'

function App() {
  

  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <Routes>
        <Route />
        <Route path="/" element={<Products />} />
        {/* <Route path="task1" element={<Task1 />} /> */}
        <Route path="products/:id" element={<ProductItem />} />
        <Route path="products/:id/edit" element={<ProductForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
