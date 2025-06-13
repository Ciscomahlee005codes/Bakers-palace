import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
    const navigate = useNavigate();
  const [isProceeding, setIsProceeding] = useState(false);

  const handleClick = () => {
    setIsProceeding(true);

    setTimeout(() => {
      navigate("/");
    }, 2000); // 5 seconds delay
  };
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="delivery-information">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Home Address'/>
           <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
       <div className="place-order-right">
         <div className="cart-total">
          <h2>Card Totals</h2>
          <div>
            <div className="card-total-details">
              <p>Subtotal</p>
              <p>₦{ getTotalCartAmount()}</p>
            </div><hr />
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>₦{getTotalCartAmount() === 0 ? 0: 1000}</p>
            </div><hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>₦{getTotalCartAmount() === 0 ? 0:getTotalCartAmount() + 1000}</b>
            </div>
            <div id="cart-content">
                <button
                onClick={handleClick}
                className={`checkout-button ${
                  isProceeding ? "proceeding" : ""
                }`}
                disabled={isProceeding}
              >
                  {isProceeding ? 'SUBMITTING' : 'SUBMIT'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
