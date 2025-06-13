import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Search from './Pages/Search/Search'
import Contact from './Pages/Contact/Contact'
import Profile from './Pages/Profile/Profile'

const App = () => {
  const [showLogin, setShowLogIn] = useState(false)

  return (
   <>
   {showLogin ? <Login setShowLogIn={setShowLogIn}/> : <></>}

    <div className='app'>
      <Navbar setShowLogIn={setShowLogIn}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />}/>
        <Route path='/search' element={<Search />}/>
         <Route path='/contact' element={<Contact />}/>
         <Route path='/profile' element={<Profile />}/>
      </Routes>
      <Footer />
    </div>
   </>
  )
}

export default App
