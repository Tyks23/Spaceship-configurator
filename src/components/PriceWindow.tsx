import React from 'react';
import './PriceWindow.scss';


function PriceWindow() {
  return (
    <div className='container-price'>
      <p>Base price: </p>
      <p>Color: </p>
      <p>Power: </p>
      <p>Warp drive: </p>
      <p>Option packlage: </p>
        <div className='container-price-sub'>
          <p>Total: </p>
        </div>
    </div>
  );
}

export default PriceWindow;
