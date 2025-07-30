import React from 'react'
import './AppDownload.css'
import apple_store from '../../assets/apple-store.jfif'
import play_store from '../../assets/playStore2.png'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Baker's Palace App</p>
     <div className="stores">
       <img src={apple_store}  alt="" />
      <img src={play_store}  alt="" />
     </div>
    </div>
  )
}

export default AppDownload