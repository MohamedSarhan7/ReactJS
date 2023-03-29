
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import MyNavbar from './components/MyNavbar/MyNavbar'
import MySlider from './components/MySlider/MySlider'
import Products from './components/Products/Products'
import MyFooter from './components/MyFooter/MyFooter'
function App() {


  return (
    <div className="App">
        <MyNavbar></MyNavbar>
        <MySlider></MySlider>
        <Products></Products>
        <MyFooter></MyFooter>
    </div>
  )
}

export default App
