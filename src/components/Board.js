import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <div>
      <Square value="1" onClick={() => onClick("some action")} />
    </div>
  );
};

export default Board;
