import React from "react";

const SimpleBtn = ({ symbol, output }) => {
  return (
    <div className="raqam" onClick={() => output(symbol)}>
      {symbol}
    </div>
  );
};

export default SimpleBtn;
