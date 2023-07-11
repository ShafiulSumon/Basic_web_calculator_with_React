import "./CSS/App.css";
import NumberButton from "./components/NumberButton";
import SignButton from "./components/SignButton";
import DisplayArea from "./components/DisplayArea";
import React from "react";
import "bulma/css/bulma.min.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [operand, setOperand] = useState("");

  function handleClickForNumber(value) {
    setResult((prev) => {
      if (Math.floor(prev / 10000000) <= 0) {
        return prev * 10 + value;
      } else {
        return prev;
      }
    });
  }

  function handleClickForSign(op) {
    console.log(op);
    if(op === "AC") {
      setFirstValue(0);
      setResult(0);
      setOperand("");
    }
    else if(op === "=") {
      console.log("fine");
      setResult(calculation(firstValue, result, operand));
    }
    else {
      setFirstValue(result)
      setResult(0);
      setOperand(op);
      console.log("wow");
    }
  }

  function calculation(firstNum, secondNum, op) {
    if (op === "+") {
      console.log(firstNum + secondNum);
      return firstNum + secondNum;
    } else if (op === "-") {
      return firstNum - secondNum;
    } else if (op === "x") {
      const res = firstNum * secondNum;
      if(Math.floor(res/10000000) > 0) {
        return res.toExponential(4);
      }
      return res;
    } else if (op === "/") {
      return (firstNum/secondNum).toPrecision(5);
    }
    else {
      return 0;
    }
  }

  return (
    <div className="App">
      <DisplayArea result={result} />

      <div className="App">
        <div className="columns">
          <div className="column">
            <SignButton value={"/"} func={handleClickForSign} />
          </div>
          <div className="column">
            <NumberButton value={7} func={handleClickForNumber} />
          </div>
          <div className="column">
            <NumberButton value={8} func={handleClickForNumber} />
          </div>
          <div className="column"> 
            <NumberButton value={9} func={handleClickForNumber} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <SignButton value={"x"} func={handleClickForSign} />
          </div>
          <div className="column">
            <NumberButton value={4} func={handleClickForNumber} />
          </div>
          <div className="column">
            <NumberButton value={5} func={handleClickForNumber} />
          </div>
          <div className="column">
            <NumberButton value={6} func={handleClickForNumber} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <SignButton value={"-"} func={handleClickForSign} />
          </div>
          <div className="column">
            <NumberButton value={1} func={handleClickForNumber} />
          </div>
          <div className="column">
            <NumberButton value={2} func={handleClickForNumber} />
          </div>
          <div className="column">
            <NumberButton value={3} func={handleClickForNumber} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <SignButton value={"+"} func={handleClickForSign} />
          </div>
          <div className="column">
            <SignButton value={"AC"} func={handleClickForSign} />
          </div>
          <div className="column">
            <NumberButton value={0} func={handleClickForNumber} />
          </div>
          <div className="column">
            <SignButton value={"="} func={handleClickForSign} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
