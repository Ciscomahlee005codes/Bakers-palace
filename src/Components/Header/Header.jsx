import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="header-content">
        <h2>Eat Like Royalthy With <span style={{fontFamily: `"Great Vibes", cursive`}}>Baker's Palace</span></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ducimus ullam eligendi debitis ut quisquam minima! Facere vero repellendus distinctio.</p>
        <button>View Menu</button>
      </div>
      </div>
    </div>
  )
}

export default Header