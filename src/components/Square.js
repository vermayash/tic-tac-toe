import React from "react";

const style = {
  background: "white",
  border: "2px solid black",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ onClick, value }) => {
  return (
    <button onClick={onClick} style={style}>
      {value}
    </button>
  );
};

export default Square;
