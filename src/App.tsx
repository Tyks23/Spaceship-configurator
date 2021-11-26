import React, { useState } from "react";
import logo from "./logo.svg";
import "./Global.scss";
import "./App.scss";
import OptionColor from "./components/OptionColor";
import OptionSimple from "./components/OptionSimple";
import OptionDetail from "./components/OptionDetail";
import PriceWindow from "./components/PriceWindow";
import { colorItems, detailItems, powerItems, warpItems } from "./data";

const initialState: { [key: string]: number } = {
  priceBase: 0,
  priceColor: 0,
  pricePower: 0,
  priceWarp: 0,
  pricePackage: 0,
  priceTotal: 0,
};

function App() {
  const [costs, setCosts] = useState(initialState);

  const [selected, setSelected] = useState({
    color: 0,
    power: 0,
    drive: 0,
    package: 0,
  });

  const setColorCost = (price: number) => {
    setCosts({ ...costs, priceColor: price });
  };
  const setPowerCost = (price: number) => {
    setCosts({ ...costs, pricePower: price });
  };
  const setWarpCost = (price: number) => {
    setCosts({ ...costs, priceWarp: price });
  };
  const setPackageCost = (price: number) => {
    setCosts({ ...costs, pricePackage: price });
  };

  return (
    <div className="App">
      <div className="Window">
        <h1> Spaceship configurator </h1>

        <h2> Select color: </h2>
        <PriceWindow costs={costs} />
        <div className="selection">
          {colorItems.map((item, index) => (
            <OptionColor
              active={index === selected.color}
              color={item.color}
              name={item.name}
              price={item.price}
              onClick={({ price }) => {
                setColorCost(price);
                setSelected({ ...selected, color: index });
              }}
            />
          ))}
        </div>
        <h2> Select power: </h2>
        <div className="selection">
          {powerItems.map((item, index) => (
            <OptionSimple
              active={index === selected.power}
              name={item.name}
              price={item.price}
              onClick={({ price }) => {
                setPowerCost(price);
                setSelected({ ...selected, power: index });
              }}
            />
          ))}
        </div>
        <h2> Warp drive: </h2>
        <div className="selection">
          {warpItems.map((item, index) => (
            <OptionSimple
              active={index === selected.drive}
              name={item.name}
              price={item.price}
              onClick={({ price }) => {
                setWarpCost(price);
                setSelected({ ...selected, drive: index });
              }}
            />
          ))}
        </div>
        <h2> Select option package: </h2>
        <div className="selection">
          {detailItems.map((item, index) => (
            <OptionDetail
              active={index === selected.package}
              name={item.name}
              price={item.price}
              features={item.features}
              onClick={({ price }) => {
                setPackageCost(price);
                setSelected({ ...selected, package: index });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
