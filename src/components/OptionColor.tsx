import React from 'react';
import { isPropertySignature } from 'typescript';
import './OptionColor.scss';

function OptionColor({ color, name, price, update, target}: {
  color: string,
  name: string,
  price: number,
  update: Function,
  target: string
}) {
  return (
    <div className="container-color" onClick={() => update(target, price)}>
      <div className="color-sample" style={{ backgroundColor: color }} />
      <p className="p-price">+{price}€</p>
      <p>{name}</p>
    </div>
  );
}

export default OptionColor;
