import React, { useState } from 'react';
import './PriceWindow.scss';



function PriceWindow({ costs }: {
  costs: {
    [key: string]: number;
  }

}) {

  let sum = Object.values(costs).reduce((a, b) => a + b, 0);

  return (
    <div className="container-price">
      <p>Base price:</p>
      <p>{1000}€</p>
      <p>Color:</p>
      <p>+{costs.priceColor}€</p>
      <p>Power:</p>
      <p>+{costs.pricePower}€</p>
      <p>Warp drive:</p>
      <p>+{costs.priceWarp}€</p>
      <p>Option package:</p>
      <p>+{costs.pricePackage}€</p>
      <p>Total:</p>
      <p>{sum + 1000}€</p>
    </div>
  );
}

export default PriceWindow;
