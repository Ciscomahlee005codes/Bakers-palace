import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
       <h2>Our Dishes near you</h2>
       <div className="food-display-list">
        {
            food_list.map((item,index)=>{
              if (category === 'All' || category===item.category) {
                 return <FoodItem key={index} id={item.id} name={item.name} price={`₦${item.price}`} rating={item.rating} image={item.image}/>
              }
              
            })
        }
       </div>
    </div>
  )
}

export default FoodDisplay