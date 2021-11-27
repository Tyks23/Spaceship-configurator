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

  const featureList = features.map((feature) =>
    <li>▲ {feature}</li>
  );
  return (
    <div
      onClick={() => onClick({ price })}
      className={classnames("container-detail", {
        "container-detail-active": active,
      })}
    >
      <div className="container-title-sub">
        <p>{name}</p>
        {price !== 0 && <p>{`+${price}€`}</p>}
      </div>
      <div className="container-detail-sub">
        <ul>{featureList}</ul>
      </div>
    </div>
  );
}

export default OptionDetail;
