import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Search from './Pages/Search'



function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/collections' element={<Collections/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/place-order' element={<PlaceOrder/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/search' element={<Search/>} />

        </Routes>
        <Footer/>
    </div>
  )
}

export default App
