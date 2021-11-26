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
  let priceBool;
  let priceParagraph;

  if (price == 0) {
    priceParagraph = <p></p>;
  } else {
    priceParagraph = <p>+{price}€</p>;
  }
  const featureList = features.map((feature) =>
    feature.length > 15 ? (
      <li className="feature-compressed">▲ {feature}</li>
    ) : (
      <li className="feature">▲ {feature}</li>
    )
  );
  return (
    <div
      onClick={() => onClick({ price })}
      className={classnames("container-detail", {
        "container-detail-active": active,
      })}
    >
      <p>{name}</p>
      <p>{priceParagraph}</p>
      <div className="container-detail-sub">
        <ul>{featureList}</ul>
      </div>
    </div>
  );
}

export default OptionDetail;
