import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setCosts({
      ...costs,
      priceColor: colorItems[selected.color].price,
      pricePower: powerItems[selected.power].price,
      priceWarp: warpItems[selected.drive].price,
      pricePackage: detailItems[selected.package].price,
    });
  }, [selected, setCosts]);

  return (
    <div className="App">
      <div className="Window">
        <h1> Spaceship configurator </h1>

        <div className="testclass">
          <PriceWindow costs={costs} />
          <h2> Select color: </h2>
          <div className="selection">
            {colorItems.map((item, index) => (
              <OptionColor
                active={index === selected.color}
                color={item.color}
                name={item.name}
                price={item.price}
                onClick={() => setSelected({ ...selected, color: index })}
              />
            ))}
          </div>
        </div>
        <h2> Select power: </h2>
        <div className="selection">
          {powerItems.map((item, index) => (
            <OptionSimple
              active={index === selected.power}
              name={item.name}
              price={item.price}
              onClick={() => {
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
              onClick={() => {
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
              onClick={() => {
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
