import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import MySlider from './components/MySlider/MySlider'
import Products from './components/Products/Products'
import Search from './components/Search/Search'
import ProductsArray from './components/Products/productsArray'

function App() {
  const [search, setSearch] = useState('')
  const [arr, setArr] = useState([...ProductsArray])


  let getSearch = (data) => {
    setSearch(data)

  }

  useEffect(() => {
    let temp = ProductsArray.filter(item => item.name.includes(search))
    setArr([...temp]);
  }, [search])


  return (
    <div className="App">

      <MySlider></MySlider>
      <Search getSearchKey={getSearch} />
      <Products data={arr} />
    </div>
  )
}

export default App
