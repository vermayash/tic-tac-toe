import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div>
      <Square value="1" onClick={() => onClick("some action")} />
      <Square value="2" onClick={() => onClick("some action")} />
      <Square value="3" onClick={() => onClick("some action")} />
      <Square value="4" onClick={() => onClick("some action")} />
      <Square value="5" onClick={() => onClick("some action")} />
      <Square value="6" onClick={() => onClick("some action")} />
      <Square value="7" onClick={() => onClick("some action")} />
      <Square value="8" onClick={() => onClick("some action")} />
      <Square value="9" onClick={() => onClick("some action")} />
    </div>
  );
};

export default Board;
