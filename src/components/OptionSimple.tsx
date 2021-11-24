import React from 'react';
import './OptionSimple.scss';

function OptionSimple({name, price}: {
  name: string,
  price: number,
}) {
  return (
    <div className="container-simple">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

export default OptionSimple;
