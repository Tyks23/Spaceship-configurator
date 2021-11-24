import React from 'react';
import './OptionDetail.scss'

function OptionDetail({ name, price }:{
  name: string,
  price: number,
}) {
  return (
    <div className="container-detail">
      <p>{name}</p>
      <p>{price}</p>
      <div className="container-detail-sub">

      </div>
    </div>
  );
}

export default OptionDetail;
