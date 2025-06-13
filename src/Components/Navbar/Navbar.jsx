import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { FaHome, FaUser, FaPhoneAlt } from "react-icons/fa";
import { StoreContext } from "../../Context/StoreContext";
import { useAuth } from "../Login/Login";
import { signOut } from 'firebase/auth';
import { auth } from '../Login/firebase'; 

const Navbar = ({ setShowLogIn }) => {
  const [activeNav, setActiveNav] = useState("#home");
  const [menu, setMenu] = useState("Home");
  const { currentUser, userLoggedIn } = useAuth();

  const { getTotalCartAmount } = useContext(StoreContext);

  const handleLogout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('bakers-user');
    window.location.reload(); // optional: reload to reflect logout
  } catch (error) {
    console.error("Logout error:", error);
  }
};


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveNav(`#${id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar (Always Visible) */}
      <nav className="navbar">
        <li className="logo">
          <img src={assets.logo} alt="Logo" />
          <h3 className="logo-text">Baker's Palace.</h3>
        </li>

        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("Our-Mobile-App")}
            className={menu === "Our-Mobile-App" ? "active" : ""}
          >
            Our Mobile App
          </a>
          <Link
            to="/contact"
            onClick={() => setMenu("Contact-Us")}
            className={menu === "Contact-Us" ? "active" : "#footer"}
          >
            Contact Us
          </Link>
        </ul>

        <div className="navbar-right">
          <Link to="/search">
            <IoIosSearch className="nav-icons icon2" />
          </Link>
          <div className="navbar-search-icon">
            <Link to="/cart">
              {" "}
              <BsCart4 className="nav-icons icon2" />{" "}
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {userLoggedIn ? (
            <div className="user-dropdown">
              <span className="hello-user">
                Hello, {currentUser?.displayName?.split(" ")[0] || "User"} <IoIosArrowDown />
              </span>
              <div className="user-dropdown-menu">
                <Link to="/profile">View Profile</Link>
                <button onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          ) : (
            <button onClick={() => setShowLogIn(true)}>Sign In</button>
          )}
        </div>
      </nav>

      {/* Bottom Mobile Nav */}
      <div className="bottom-navbar">
        <Link
          to="/"
          className={activeNav === "Home" ? "active" : ""}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FaHome id="down-icon" />
          <span style={{ fontSize: "15px" }}>Home</span>
        </Link>
        <Link
          to="/search"
          className={activeNav === "Search" ? "active" : ""}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <IoIosSearch id="down-icon" />
          <span style={{ fontSize: "15px" }}>Search</span>
        </Link>
        <Link
          to="/cart"
          className={activeNav === "Order" ? "active" : ""}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <BsCart4 id="down-icon" />
          {getTotalCartAmount() > 0 && <div className="bottom-cart-dot"></div>}
          <span style={{ fontSize: "15px" }}>Orders</span>
        </Link>
        <Link
          to="/contact"
          className={activeNav === "Contact" ? "active" : ""}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FaPhoneAlt id="down-icon" />
          <span style={{ fontSize: "15px" }}>Contact</span>
        </Link>
        <Link
          to="/profile"
          className={activeNav === "#about" ? "active" : ""}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FaUser id="down-icon" />
          <span style={{ fontSize: "15px" }}>Profile</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
