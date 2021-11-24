import React from 'react';
import { isPropertySignature } from 'typescript';
import './OptionColor.scss';

function OptionColor({ color, name, price }: {
  color: string,
  name: string,
  price: number,
}) {
  return (
    <div className="container-color" onClick={() => {}}>
      <div className="color-sample" style={{ backgroundColor: color }} />

      <p>+{price}€</p>
      <p>{name}</p>
    </div>
  );
}

export default OptionColor;
