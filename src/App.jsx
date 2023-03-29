
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import MySlider from './components/MySlider/MySlider'
import Products from './components/Products/Products'


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      
      <MySlider></MySlider>
      <Products />
    </div>
  )
}

export default App
