import React from "react";
import "./OptionSimple.scss";
import classnames from "classnames";

function OptionSimple({
  name,
  price,
  active = false,
  onClick,
}: {
  name: string;
  price: number;
  active?: boolean;
  onClick: (item: { price: number }) => void;
}) {
  return (
    <div
      onClick={() => onClick({ price })}
      className={classnames("container-simple", {
        "container-simple-active": active,
      })}
    >
      <p>{name}</p>
      <p className="p-price">+{price}€</p>
    </div>
  );
}

export default OptionSimple;
