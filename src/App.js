import React from 'react';
import logo from './logo.svg';
import Button from "./Button"
import Button2 from "./button2"
import Calculator from "./projects/Calculator"
import DropDown from "./projects/Dropdown"
 import Card from "./projects/Card/card"
 import CardPage from './projects/CardPage'
 import Button3 from './projects/Button3/button3'
 import Button3Page from './projects/Button3Page/button3page'
 import ChildToParent from "./projects/ChildToParent"
 import Select from "./projects/select"
import Header from "./projects/Ecommerce/header"
import BottomHeader from "./projects/Ecommerce/bottomheader"
import Ecommerce from "./projects/Ecommerce"
import './App.css';

function App() {
  return (
    <div className="box">
      {/* <Calculator /> */}
      {/* <CardPage /> */}
      {/* <Button3Page /> */}
      {/* <ChildToParent></ChildToParent> */}
      {/* <Select /> */}
     <Ecommerce ></Ecommerce>
    </div>
  );
}


export default App;
