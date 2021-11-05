import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from "./logic.js/calculateWinner";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [yIsNext, setYIsNext] = useState(false);
  const winner = calculateWinner(board);

  const onClick = () => {};
  const jumpTo = () => {};
  const renderMoves = () => {};

  return (
    <div>
      <Board onClick={onClick} squares={board} />
    </div>
  );
};

export default Game;
