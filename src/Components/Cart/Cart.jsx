import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [isProceeding, setIsProceeding] = useState(false);
   const [promoCode, setPromoCode] = useState("");
  const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");


  const handleClick = () => {
    setIsProceeding(true);

    setTimeout(() => {
      navigate("/order");
    }, 2000); // 5 seconds delay
  };

   const handleSubmit = () => {
    if (promoCode.trim() === "56565") {
      setPopupMessage("✅ Promo Code Applied!");
    } else {
      setPopupMessage("❌ Sorry, you don’t have a Promo Code");
    }

    setShowPopup(true);

    // Auto close after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
      setPopupMessage("");
    }, 3000);
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{`₦${item.price}`}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>{`₦${item.price * cartItems[item.id]}`}</p>
                  <IoMdClose
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="card-total-details">
              <p>Subtotal</p>
              <p>₦{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>₦{getTotalCartAmount() === 0 ? 0 : 1000}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>
                ₦{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 1000}
              </b>
            </div>
            <div id="cart-content">
              <button
                onClick={handleClick}
                className={`checkout-button ${
                  isProceeding ? "proceeding" : ""
                }`}
                disabled={isProceeding}
              >
                  {isProceeding ? 'PROCEEDING...' : 'PROCEED TO CHECKOUT'}
              </button>
            </div>
          </div>
        </div>
        <div className="card-promo-code">
        <div>
          <p>Enter Your Promo Code</p>
          <div className="card-promo-code-input">
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="promo-popup">
          <div className="promo-popup-inner">
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
      
     
      </div>
    </div>
  );
};

export default Cart;