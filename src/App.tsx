import React, {useState} from 'react';
import logo from './logo.svg';
import './Global.scss';
import './App.scss';
import  OptionColor from "./components/OptionColor";
import OptionSimple from './components/OptionSimple';
import OptionDetail from './components/OptionDetail';
import PriceWindow from './components/PriceWindow';


function App() {
  const initialState: {[key: string]: number} = {
    priceBase: 0,
    priceColor: 0,
    pricePower: 0,
    priceWarp: 0,
    pricePackage: 0,
    priceTotal: 0
    }

  const update = (target: string, price: number) => {costs[target] = price; setCosts({...costs})}
  
  const [costs, setCosts] = useState(initialState);
  return (
    <div className="App">
      <div className="Window">
        <h1> Spaceship configurator </h1>

        <h2> Select color: </h2>
        <PriceWindow costs={costs} />
        <div className='selection'>
          <OptionColor color="#FFFFFF" name="Snow" target="priceColor" price={0} update={update}/>
          <OptionColor color="#FF7A00" name="Volcano" target="priceColor" price={100} update={update}/>
          <OptionColor color="#6BE4FF" name="Sky" target="priceColor" price={1000} update={update}/>
        </div>
        <h2> Select power: </h2>
        <div className='selection'>
          <OptionSimple name="100 MW" price={100} target="pricePower" update={update}/>
          <OptionSimple name="150 MW" price={150} target="pricePower" update={update}/>
          <OptionSimple name="200 MW" price={200} target="pricePower" update={update}/>
        </div>
        <h2> Warp drive: </h2>
        <div className='selection'>
          <OptionSimple name="NO" price={0} target="priceWarp" update={update}/>
          <OptionSimple name="YES" price={1000} target="priceWarp" update={update}/>
        </div>
        <h2> Select option package: </h2>
        <div className='selection'>
          <OptionDetail name="Basic" price={0} target="pricePackage" update={update} features={["Air conditioning", "Cloth seats", "Fm Radio"]}/>
          <OptionDetail name="Sport" price={100} target="pricePackage" update={update} features={["Air conditioning", "Cloth seats", "Fm Radio", "Personal tech support"]}/>
          <OptionDetail name="Luxury" price={500} target="pricePackage" update={update} features={["Air conditioning", "Cloth seats", "Fm Radio", "Chrome wheels", "Window tint", "Subwoofer"]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
