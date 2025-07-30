// Menu and Image DataBase
import burger_1 from './burger-1.jpg'
import burger_2 from './burger-2.jpg'
import burger_3 from './burger-3.jpg'
import burger_4 from './burger-4.jpg'
import cake_1 from './cake-1.jpg'
import cake_2 from './cake-2.jpg'
import cake_3 from './cake-3.jpg'
import cake_4 from './cake-4.jpg'
import cake_5 from './cake-5.jpg'
import food_1 from './food-1.jpg'
import food_3 from './food-3.jpg'
import food_11 from './food-11.jpg'
import food_12 from './food-12.jpg'
import food_13 from './food-13.jpg'
import food_10 from './food-10.jpg'
import food_14 from './food-14.jpg'
import food_15 from './food-15.jpg'
import food_18 from './food-18.jpg'
import food_20 from './food-20.jpg'
import ice_cream_1 from './ice-cream-1.jpg'
import ice_cream_2 from './ice-cream-2.jpg'
import ice_cream_3 from './ice-cream-3.jpg'
import ice_cream_4 from './ice-cream-4.jpg'
import ice_cream_5 from './ice-cream-5.jpg'
import ice_cream_6 from './ice-cream-6.jpg'
import pastry_1 from './pastry-1.jpg'
import pastry_2 from './pastry-2.jpg'
import pastry_3 from './pastry-3.jpg'
import pastry_4 from './pastry-4.jpg'
import pizza_1 from './pizza-1.jpg'
import pizza_2 from './pizza-2.jpg'
import pizza_3 from './pizza-3.jpg'
import pizza_4 from './pizza-4.jpg'
import pizza_5 from './pizza-5.jpg'
import shawarma_1 from './shawarma-1.jpg'
import shawarma_2 from './shawarma-2.jpg'
import shawarma_3 from './shawarma-3.jpg'
import shawarma_4 from './shawarma-4.png'
import shawarma_6 from './shawarma-6.png'
import user_1 from './user-1.jpg'
import user_2 from './user-2.jpg'
import user_3 from './user-3.jpg'
import user_4 from './user-4.jpg'
import user_5 from './user-5.jpg'
import user_6 from './user-6.jpg'
import logo from './logo.png'

export const assets = {
     burger_1,
    burger_2,
    burger_3,
    burger_4,
    cake_1,
    cake_2,
    cake_3,
    cake_4,
    cake_5,
    ice_cream_1,
    ice_cream_2,
    ice_cream_3,
    ice_cream_4,
    ice_cream_5,
    ice_cream_6,
    pastry_1,
    pastry_2,
    pizza_1,
    pizza_2,
    pizza_3,
    pizza_4,
    shawarma_1,
    shawarma_2,
    user_1,
    user_2,
    user_3,
    user_4,
    user_5,
    user_6,
    logo
}

export const menuList = [
    {
        menu_name: 'Burger',
        menu_image: burger_1 
    },
    {
        menu_name: 'Cake',
        menu_image: cake_1 
    },
     {
        menu_name: 'Ice Cream',
        menu_image: ice_cream_3 
    },
     {
        menu_name: 'Pastries',
        menu_image: pastry_2 
    },
     {
        menu_name: 'Pizza',
        menu_image: pizza_2
    },
     {
        menu_name: 'Shawarma',
        menu_image: shawarma_1
    },
     {
        menu_name: 'Continental Dishes',
        menu_image: food_1
    }
];

export const food_list = [
   {
    id: '1',
    name: 'Fried Rice and Beef',
    image: food_1,
    price: 3500,
    rating: 3,
    category: 'Continental Dishes'
   },
    {id: '2',
    name: 'Macroni and Fries',
    image: food_11,
    price: 4500,
    rating: 5,
    category: 'Continental Dishes'
   },
    {id: '3',
    name: 'Coconut Rice and Chicken',
    image: food_3,
    rating: 3,
    price: 3800,
    category: 'Continental Dishes'
   },
    {id: '4',
    name: 'Vegtarian Rice',
    image: food_12,
    price: 2000,
    rating: 4,
    category: 'Continental Dishes'
   },
    {id: '5',
    name: 'Beefed Shawarma',
    image: shawarma_1,
    price: 6000,
    rating: 5,
    category: 'Shawarma'
   },
    {id: '6',
    name: 'Jellof Rice and Fish',
    image: food_13,
    price: 4750,
    rating: 5,
    category: 'Continental Dishes'
   },
    {id: '7',
    name: 'Moi Moi and Egg',
    image: food_15,
    price: 4800,
    rating: 3,
    category: '9ja Dishes'
   },
    {id: '8',
    name: 'Burger King',
    image: burger_1,
    price: 3100,
    rating: 2,
    category: 'Burger'
   },
    {id: '9',
    name: 'Bitter Leaf Soup and Akpu',
    image: food_20,
    price: 7500,
    rating: 4.5,
    category: '9ja Dishes'
   },
    {id: '10',
    name: 'Rice, Amala and Kpomo',
    image: food_10,
    price: 7300,
    rating: 3.5,
    category: '9ja Dishes'
   },
    {id: '11',
    name: 'Burger King (2 in 1)',
    image: burger_2,
    price: 6000,
    rating: 2,
    category: 'Burger'
   },
    {id: '12',
    name: 'Chocolate Cake',
    image: cake_5,
    price: 10500,
    rating: 5,
    category: 'Cake'
   },
    {id: '13',
    name: 'Strawberry Cake',
    image: cake_4,
    price: 21500,
    rating: 4.5,
    category: 'Cake'
   },
    {id: '14',
    name: 'Jellof Rice, Pasta and Egg',
    image: food_14,
    price: 7800,
    rating: 3.5,
    category: 'Continental Dishes'
   },
     {id: '15',
    name: 'Chicken Pie',
    image: pastry_2,
    price: 3200,
    rating: 4.5,
    category: 'Pastries'
   },
     {id: '16',
    name: 'Family Sized Pizza',
    image: pizza_4,
    price: 12200,
    rating: 4,
    category: 'Pizza'
   },
     {id: '17',
    name: 'Ginger and Garlic Pizza',
    image: pizza_3,
    price: 6200,
    rating: 4,
    category: 'Pizza'
   },
     {id: '18',
    name: 'Orishirishi',
    image: food_18,
    price: 13000,
    rating: 4.5,
    category: 'Continental Dishes'
   },
     {id: '19',
    name: 'Foriegn Suya and Orishirishi',
    image: food_18,
    price: 14200,
    rating: 3.5,
    category: 'Continental Dishes'
   },
    {id: '20',
    name: 'Burger King II',
    image: burger_4,
    price: 4300,
    rating: 4,
    category: 'Burger'
   },
    {id: '21',
    name: 'Choco Cup Cake',
    image: cake_5,
    price: 4300,
    rating: 4,
    category: 'Cake'
   },
    {id: '22',
    name: 'Vanilla & Choco Cake',
    image: cake_1,
    price: 14000,
    rating: 4,
    category: 'Cake'
   },
    {id: '23',
    name: 'Crisp Vanilla Ice cream',
    image: ice_cream_6,
    price: 7500,
    rating: 4,
    category: 'Ice Cream'
   },
      {id: '24',
    name: 'Chicken Shawarma',
    image: shawarma_3,
    price: 5500,
    rating: 4.5,
    category: 'Shawarma'
   },
       {id: '25',
    name: 'Double Shawarma',
    image: shawarma_4,
    price: 10500,
    rating: 4.5,
    category: 'Shawarma'
   },
      {id: '26',
    name: 'Shawarma',
    image: shawarma_6,
    price: 7500,
    rating: 4.5,
    category: 'Shawarma'
   },
       {id: '27',
    name: 'French Pizza',
    image: pizza_2,
    price: 12500,
    rating: 4.5,
    category: 'Pizza'
   },
     {id: '28',
    name: 'Pizza and free Coke',
    image: pizza_5,
    price: 9500,
    rating: 4.5,
    category: 'Pizza'
   },
    {id: '29',
    name: '3 in 1 Donuts',
    image: pastry_1,
    price: 9000,
    rating: 2,
    category: 'Pastries'
   },
    {id: '30',
    name: 'Apple Pie',
    image: pastry_3,
    price: 12000,
    rating: 4,
    category: 'Pastries'
   },
    {id: '31',
    name: 'Sausage Rolls',
    image: pastry_4,
    price: 7000,
    rating: 3.5,
    category: 'Pastries'
   },
     {id: '32',
    name: 'Burger & Fries',
    image: burger_3,
    price: 8500,
    rating: 4.5,
    category: 'Burger'
   },
     {id: '33',
    name: '2 in 1 Cone Vanilla',
    image: ice_cream_5,
    price: 6500,
    rating: 3.5,
    category: 'Ice Cream'
   },
     {id: '34',
    name: 'Chocolate Ice Cream',
    image: ice_cream_4,
    price: 5500,
    rating: 5,
    category: 'Ice Cream'
   },
     {id: '35',
    name: 'Choco Combo',
    image: ice_cream_3,
    price: 8500,
    rating: 4.5,
    category: 'Ice Cream'
   },
]