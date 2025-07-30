import React, { useContext} from 'react'
import Rating from './Rating'
import './FoodItem.css'
// React Icon
import { MdAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id,name,price,category,image,rating}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
         <img src={image} alt="" className="food-item-image"/>
         {!cartItems[id]
            ? <MdAdd  className='add' onClick={()=> addToCart(id)} />
            : <div className="food-item-counter">
                 <IoMdRemove onClick={()=> removeFromCart(id)} className='add-2' />
                 <p>{cartItems[id]}</p>
                 <MdAdd onClick={()=> addToCart(id)}  className='minus'  />
            </div>
         }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <Rating rating={rating}/>
        </div>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  )
}

export default FoodItem