import React, { useRef } from "react";
import "./App.css";
const SimpleBtn = React.lazy(() => import("./SimpleBtn"));

const Calculator = () => {
  const inputRef = useRef(null);
  const symbols = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, ".", "/", "("];

  const output = (symbol) => {
    if (inputRef.current.value === "0") {
      inputRef.current.value = "";
    }
    inputRef.current.value = inputRef.current.value + symbol;
  };

  const calculate = () => {
    inputRef.current.value = eval(inputRef.current.value);
  };

  const clear = () => {
    inputRef.current.value = 0;
  };

  const backSpace = () => {
    if (inputRef.current.value.length === 1) inputRef.current.value = 0;
    else
      inputRef.current.value = inputRef.current.value.slice(
        0,
        inputRef.current.value.length - 1
      );
  };

  return (
    <div className="contener">
      <input
        type="text"
        className="hisob"
        value={inputRef.current ? inputRef.current.value : "0"}
        ref={inputRef}
      />
      <div className="xd">
        <div className="all" id="clear" onClick={clear}>
          clear
        </div>
        <div className="all" id="bs" onClick={backSpace}>
          ⬅
        </div>
      </div>
      <div className="grid">
        {symbols.map((element) => (
          <SimpleBtn symbol={element} key={element} output={output} />
        ))}
        <SimpleBtn symbol="=" output={calculate} />
        <SimpleBtn symbol=")" output={output} />
      </div>
    </div>
  );
};

export default Calculator;
