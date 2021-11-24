import React, {useState} from 'react';
import logo from './logo.svg';
import './Global.scss';
import './App.scss';
import  OptionColor from "./components/OptionColor";
import OptionSimple from './components/OptionSimple';
import OptionDetail from './components/OptionDetail';
import PriceWindow from './components/PriceWindow';

let priceBase: number;
let priceColor: number;
let pricePower: number;
let priceWarp: number;
let pricePackage: number;
let priceTotal: number;


function priceCalculation () {
  
}

function App() {
  return (
    <div className="App">
      <div className="Window">
        <h1> Spaceship configurator </h1>

        <h2> Select color: </h2>
        <PriceWindow />
        <div className='selection'>
          <OptionColor color="red" name="Red" price={0} />
          <OptionColor color="green" name="Green" price={100}/>
          <OptionColor color="blue" name="Blue" price={1000}/>
        </div>
        <h2> Select power: </h2>
        <div className='selection'>
          <OptionSimple name="100 MW" price={100} />
          <OptionSimple name="150 MW" price={150} />
          <OptionSimple name="200 MW" price={200} />
        </div>
        <h2> Warp drive: </h2>
        <div className='selection'>
          <OptionSimple name="NO" price={0} />
          <OptionSimple name="YES" price={1000} />
        </div>
        <h2> Select option package: </h2>
        <div className='selection'>
          <OptionDetail name="Basic" price={0}/>
          <OptionDetail name="Sport" price={100}/>
          <OptionDetail name="Luxury" price={500}/>
        </div>
      </div>
    </div>
  );
}

export default App;
