import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "HAI VINTO"
          : "HAI PERSO"}
      </h3>
      <h1>La parola era: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>Hai indovinato in {currAttempt.attempt} tentativi</h3>
      )}
    </div>
  );
}

export default GameOver;
