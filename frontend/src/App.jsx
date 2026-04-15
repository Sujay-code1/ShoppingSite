import {Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const Home = lazy(() => import('./Pages/Home'))
const Collections = lazy(() => import('./Pages/Collections'))
const About = lazy(() => import('./Pages/About'))
const Contact = lazy(() => import('./Pages/Contact'))
const Product = lazy(() => import('./Pages/Product'))
const Cart = lazy(() => import('./Pages/Cart'))
const Login = lazy(() => import('./Pages/Login'))
const PlaceOrder = lazy(() => import('./Pages/PlaceOrder'))
const Orders = lazy(() => import('./Pages/Orders'))
const Search = lazy(() => import('./Pages/Search'))

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar />
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
        </div>
      }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
