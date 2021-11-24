import React from 'react';
import './OptionDetail.scss'

function OptionDetail({ name, price, target, update }:{
  name: string,
  price: number,
  update: Function,
  target: string
}) {
  return (
    <div className="container-detail" onClick={() => update(target, price)}>
      <p>{name}</p>
      <p>{price}</p>
      <div className="container-detail-sub">

      </div>
    </div>
  );
}

export default OptionDetail;
