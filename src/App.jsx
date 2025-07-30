import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from "../src/Components/NavBar/NavBar";
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import DelayLoader from './Components/Loader/DelayLoader'; 
import Login from './Components/Login/Login'; // Assuming this is the login modal
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
// import ScrollToTop from './Components/ScrollTop/ScrollToTop';

// Lazy-loaded route components
const Home = DelayLoader(() => import('./Pages/Home/Home'));
const CartPage = DelayLoader(() => import('./Pages/CartPage/CartPage'));
const PlaceOrderPage = DelayLoader(() => import('./Pages/PlaceOrderPage/PlaceOrderPage'));
const Search = DelayLoader(() => import('./Pages/Search/Search'));
const ContactPage = DelayLoader(() => import('./Pages/ContactPage/ContactPage'));
const ProfilePage = DelayLoader(() => import('./Pages/ProfilePage/ProfilePage'));

const App = () => {
  const [showLogin, setShowLogIn] = useState(false);

  return (
    <>
      {showLogin && <Login setShowLogIn={setShowLogIn} />}
      <div>
        <Suspense fallback={<Loader />}>
          <div className="app">
            <NavBar setShowLogIn={setShowLogIn} />
            <ScrollToTop />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/order' element={<PlaceOrderPage />} />
            <Route path='/search' element={<Search />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>

          <Footer />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default App;
