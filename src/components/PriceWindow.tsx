import React, { useState } from 'react';
import './PriceWindow.scss';



function PriceWindow({costs}: {
  costs:{
    [key: string]: number;
  }
  
}) {
  
  let sum = Object.values(costs).reduce((a, b) => a + b, 0);

  return (
    <div className='container-price'>
      <div className='row'>
        <div className='column'>
          <p>Base price:</p>
          <p>Color:</p>
          <p>Power:</p>
          <p>Warp drive:</p>
          <p>Option package:</p>
        </div>
        <div className='column prices'>
          <p>{1000}€</p>
          <p>+{costs.priceColor}€</p>
          <p>+{costs.pricePower}€</p>
          <p>+{costs.priceWarp}€</p>
          <p>+{costs.pricePackage}€</p>
        </div>
      
        <div className='container-price-sub'>
          <div className='row'>
            <div className='column'>
              <p>Total:</p>
            </div>
            <div className='column prices'>
              <p>{sum + 1000}€</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default PriceWindow;
