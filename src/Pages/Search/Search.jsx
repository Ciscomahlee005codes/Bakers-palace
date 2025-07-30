import React, { useState } from 'react';
import { food_list } from '../../assets/assets';
import FoodItem from '../../Components/FoodItem/FoodItem';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const results = food_list.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  };

  const handleSuggestionClick = (itemName) => {
    setQuery(itemName);
    const exactMatch = food_list.filter(item => item.name.toLowerCase() === itemName.toLowerCase());
    setFilteredItems(exactMatch);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for food..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />

      {/* Autocomplete dropdown */}
      {query.length > 0 && filteredItems.length > 1 && (
        <ul className="autocomplete-dropdown">
          {filteredItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSuggestionClick(item.name)}
              className="autocomplete-item"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}

      {/* Render matching results as cards */}
      <div className="search-results">
        {filteredItems.length > 0 && (
          filteredItems.map((item) => (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              price= {`₦${item.price}`}
              image={item.image}
              rating={item.rating}
              category={item.category}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;