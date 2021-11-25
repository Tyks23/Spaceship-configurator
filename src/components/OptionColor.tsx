import React from 'react';
import { isPropertySignature } from 'typescript';
import './OptionColor.scss';

function OptionColor({ color, name, price, update, target, isActive}: {
  color: string,
  name: string,
  price: number,
  update: Function,
  target: string,
  isActive: boolean
}) {
  let classNameTest = 'container-color';
  if (!isActive) {
    classNameTest = 'container-color-active';
  }

  function ReverseBool(variable: boolean){
    variable != variable;
    return variable;
  }

  return (
    <div className='container-color' onClick={() => {update(target, price); console.log(isActive, classNameTest);}}>
      <div className="color-sample" style={{ backgroundColor: color }} />
      <p className="p-price">+{price}€</p>
      <p>{name}</p>
    </div>
  );
}

export default OptionColor;
