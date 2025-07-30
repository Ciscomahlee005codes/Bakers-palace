import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({ rating }) => {
  const totalStars = 5

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          color={index < rating ? '#facc15' : '#e5e7eb'} // Yellow for filled, gray for empty
          className="text-xl"
        />
      ))}
    </div>
  )
}

export default Rating