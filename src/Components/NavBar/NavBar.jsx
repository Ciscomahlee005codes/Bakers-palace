import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { FaHome, FaUser, FaPhoneAlt } from "react-icons/fa";
import { StoreContext } from "../../Context/StoreContext";
import { useAuth } from "../../Context/AuthContext";

const NavBar = ({ setShowLogIn }) => {
  const { cartItems } = useContext(StoreContext);
  const { currentUser, logout } = useAuth(); // ✅ Correct source for auth
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const handleLogout = () => {
    logout();
    window.location.href = "/"; // Optional: redirect after logout
  };

  const hasItemsInCart = Object.values(cartItems).some((qty) => qty > 0);

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar">
        <li className="logo">
          <img src={assets.logo} alt="Logo" />
          <h3 className="logo-text">Baker's Palace.</h3>
        </li>

        <ul className="navbar-menu">
          <Link to="/">Home</Link>
          <a href="#explore-menu">Menu</a>
          <a href="#app-download">Our Mobile App</a>
          <Link to="/contact">Contact Us</Link>
        </ul>

        <div className="navbar-right">
          <Link to="/search">
            <IoIosSearch className="nav-icons icon2" />
          </Link>

          <div className="navbar-search-icon">
            <Link to="/cart">
              <BsCart4 className="nav-icons icon2" />
              {hasItemsInCart && <div className="dot"></div>}
            </Link>
          </div>

          {/* ✅ Reacts to login/logout in real time */}
          {currentUser ? (
            <div className="user-dropdown" onClick={toggleDropdown}>
              <span className="hello-user">
                Hello, {currentUser.name?.split(" ")[0] || "User"}{" "}
                <IoIosArrowDown />
              </span>
              {showDropdown && (
                <div className="user-dropdown-menu">
                  <Link to="/profile">View Profile</Link>
                  <button onClick={handleLogout}>Log Out</button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setShowLogIn(true)}>Sign In</button>
          )}
        </div>
      </nav>

      {/* Bottom Mobile Navbar */}
      <div className="bottom-navbar">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <FaHome id="down-icon" />
          <span>Home</span>
        </Link>

        <Link
          to="/search"
          className={location.pathname === "/search" ? "active" : ""}
        >
          <IoIosSearch id="down-icon" />
          <span>Search</span>
        </Link>

        <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
  <div className="bottom-cart-icon">
    <BsCart4 id="down-icon" />
    {hasItemsInCart && <div className="bottom-cart-dot"></div>}
  </div>
  <span>Orders</span>
</Link>


        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          <FaPhoneAlt id="down-icon" />
          <span>Contact</span>
        </Link>

        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          <FaUser id="down-icon" />
          <span>Profile</span>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
