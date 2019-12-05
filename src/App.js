import React from 'react';
import logo from './logo.svg';
import Button from "./Button"
import './App.css';

function App() {
  React.useEffect(() => {
    let result = document.querySelector(".result");
    let buttons = document.getElementById("buttons");

    let leftOperand = "";
    let rightOperand = "";
    let activeOperation = "";

    buttons.addEventListener("click", calculate);

    function calculate(event) {
      let value = event.target.innerText;

      ////to prevent + ,-
      if (!result.innerText && isNaN(value) && value !== ".") {
        return;
      }

      //right side check non number except c, b, = and ./// To prevent multiple operator
      if (
        activeOperation &&
        isNaN(value) &&
        value !== "." &&
        value !== "c" &&
        value !== "b" &&
        value !== "="
      ) {
        return;
      }


      if (leftOperand.includes(".") && !activeOperation && value === ".") {
        return
      }

      if (rightOperand.includes(".") && activeOperation && value === ".") {
        return
      }

      ////////////////concat number/////////////////////////////////
      if (!result.innerText) {
        result.innerText = `${value}`;
        leftOperand = result.innerText
      } else if (value !== "c" && value !== "b" && value !== "=") {

        result.innerText = `${result.innerText}${value}`;
        leftOperand = result.innerText;

        console.log(leftOperand, "leftOperandleftOperand");
      }
      // condition to stop multiple operators

      ///////////////////
      if (activeOperation) {
        console.log(activeOperation.length, "length");
        let right = `${value}`;
        rightOperand = `${rightOperand}${value}`;
        console.log(rightOperand, "rightOperandrightOperand");
      }
      if (value === "+") {
        activeOperation = "+";
      }
      if (value === "-") {
        activeOperation = "-";
      }
      if (value === "*") {
        activeOperation = "*";
      }
      if (value === "/") {
        activeOperation = "/";
      }
      ///////////////////////////
      if (value === "=") {
        console.log(value, "euqal here");
        switch (activeOperation) {
          case "+":
            {
              result.innerText = parseFloat(leftOperand) + parseFloat(rightOperand);
            }
            break;
          case "-":
            {
              result.innerText = parseFloat(leftOperand) - parseFloat(rightOperand);
            }
            break;
          case "*":
            {
              result.innerText = parseFloat(leftOperand) * parseFloat(rightOperand);
            }
            break;
          case "/":
            {
              result.innerText = parseFloat(leftOperand) / parseFloat(rightOperand);
            }
            break;
        }
        leftOperand = result.innerText;
        rightOperand = "";
        activeOperation = "";
      }

      ///////////clear///////////////
      if (value === "c") {
        result.innerText = "";
        leftOperand = "";
        rightOperand = "";
        activeOperation = "";
      }

      /////////////////back ///////
      if (value === "b") {
        const newValue = result.innerText.slice(0, result.innerText.length - 1);
        console.log("newValue", newValue);
        result.innerText = newValue;
      }
    }


  }, [])
  return (
    <div className=" container calculater">
      <div className="row result"></div>
      <div className=" row" id="buttons">
        <div className="col-4">1</div>
        <div className="col-4">2</div>
        <div className="col-4">3</div>
        <div className="col-4">4</div>
        <div className="col-4">5</div>
        <div className="col-4">6</div>
        <div className="col-4">7</div>
        <div className="col-4">8</div>
        <div className="col-4">9</div>
        <div className="col-4">0</div>
        <div className="col-4 ">.</div>

        <div className="col-4 plus">+</div>
        <div className="col-4 minus">-</div>
        <div className="col-4 multiply">*</div>
        <div className="col-4 divide">/</div>

        <div className="col-4 " id="clean">c</div>
        <div className="col-4 " id="back">b</div>

        <div className="col-4" id="euqal">=</div>




      </div>
      {/* <Button /> */}
    </div>
  );
}

export default App;
