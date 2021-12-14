import '../CSS/menu.css';
import FlipCard from './FlipCard';
import useFetch from '../hooks/useFetch';
import {useState, useEffect} from 'react';

const Menu = (props) => {
    const {data:burgerData, isLoading,  isError: error} = useFetch('https://api.jsonbin.io/b/61b767380ddbee6f8b1c90f7/1');   //Burger URL
    // const {data:burgerData, isLoading,  isError: error} = useFetch('http://localhost:8000/burgers');

    return (
        <div className="container menu-container">
           <div className="row menu-row g-3">
               {isLoading && <div className="alert alert-warning">Loading...</div>}
               {error && <div className="alert alert-danger">{error}</div>}
               {burgerData && burgerData.map(burger => {
                  return <FlipCard 
                  key={burger.key}
                  burgerName={burger.burger_name} 
                  burgerPrice={burger.burger_price}
                  />
              })}
           </div>
        </div>
    )
};

// burgerImage={burger.image_path}

export default Menu;