import React from 'react';
import CardPage from '../CardPage'
import Header from "./header"
import BottomHeader from "./bottomheader"
import Leftside from "./leftside/leftside.js"

function Ecommerce() {
  return (
    <div className="container-ecommerce">
      {/* <Calculator /> */}
      {/* <CardPage /> */}
      {/* <Button3Page /> */}
      {/* <ChildToParent></ChildToParent> */}
      {/* <Select /> */}
      <Header />
      <BottomHeader />
      <Leftside />
      <CardPage />
    </div>
  );
}


export default Ecommerce;
