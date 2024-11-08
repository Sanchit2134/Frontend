import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Carts from './pages/Carts'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:vw=[9vw]'>
      <Router>
        <ToastContainer/>
        <Navbar/>
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Products />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Order/>} />
        </Routes>
        <Footer/>
      </Router>
      </div>
    </>
  )
}

export default App
