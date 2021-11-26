import React from "react";
import "./OptionDetail.scss";
import classnames from "classnames";

function OptionDetail({
  name,
  price,
  features,
  active = false,
  onClick,
}: {
  name: string;
  price: number;
  features: string[];
  active?: boolean;
  onClick: (item: { price: number }) => void;
}) {
  const featureList = features.map((feature) => (
    <li className="feature">▲{feature}</li>
  ));
  return (
    <div
      onClick={() => onClick({ price })}
      className={classnames("container-detail", {
        "container-detail-active": active,
      })}
    >
      <p>{name}</p>
      <p>+{price}€</p>
      <div className="container-detail-sub">
        <ul>{featureList}</ul>
      </div>
    </div>
  );
}

export default OptionDetail;
