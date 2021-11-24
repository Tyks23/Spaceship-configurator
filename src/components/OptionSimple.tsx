import React from 'react';
import './OptionSimple.scss';

function OptionSimple({name, price, update, target}: {
  name: string,
  price: number,
  update: Function,
  target: string
}) {
  return (
    <div className="container-simple" onClick={() => update(target, price)}>
      <p>{name}</p>
      <p className="p-price">+{price}€</p>
    </div>
  );
}

export default OptionSimple;
