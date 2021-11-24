import React from 'react';
import './OptionDetail.scss'

function OptionDetail({ name, price, target, update, features }:{
  name: string,
  price: number,
  update: Function,
  target: string,
  features: string[]
}) {
  const featureList = features.map((feature) =>
    <li>▲{feature}</li>);
  return (
    <div className="container-detail" onClick={() => update(target, price)}>
      <p>{name}</p>
      <p>+{price}€</p>
      <div className="container-detail-sub">
        <ul>{featureList}</ul>
      </div>
    </div>
  );
}

export default OptionDetail;
