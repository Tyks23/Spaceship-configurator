import React from "react";
import classnames from "classnames";
import { isPropertySignature } from "typescript";
import "./OptionColor.scss";

function OptionColor({
  color,
  name,
  price,
  active = false,
  onClick,
}: {
  color: string;
  name: string;
  price: number;
  active?: boolean;
  onClick: (item: { price: number }) => void;
}) {
  return (
    <div
      onClick={() => onClick({ price })}
      className={classnames("container-color", {
        "container-color-active": active,
      })}
    >
      <div style={{ backgroundColor: color }} className="color-sample" />
      <p className="p-price">+{price}€</p>
      <p>{name}</p>
    </div>
  );
}

export default OptionColor;
