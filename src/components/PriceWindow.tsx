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
      <p className="p-left">Base price: <a className="a-right">{1000}</a></p>
      <p>Color: {costs.priceColor}</p>
      <p>Power: {costs.pricePower}</p>
      <p>Warp drive: {costs.priceWarp}</p>
      <p>Option package: {costs.pricePackage}</p>
        <div className='container-price-sub'>
          <p>Total: {sum + 1000}</p>
        </div>
    </div>
  );
}

export default PriceWindow;
