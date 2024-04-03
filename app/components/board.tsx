"use client";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Square } from "react-chessboard/dist/chessboard/types";

const Board = () => {
  const [game, setGame] = useState("start");
  const onDrop = (sourceSquare:Square, targetSquare:Square ) => {
    // Update the game position after a piece is dropped
    // This is a placeholder for actual game logic
    setGame(prev => ({ ...prev, [targetSquare]: prev[sourceSquare], [sourceSquare]: null }));
  };
  return (
    <main>
      <Chessboard
        id="chessboard"
        areArrowsAllowed={true}
        position={game}
        onPieceDrop={onDrop}
      />
    </main>
  );
};
export default Board;
