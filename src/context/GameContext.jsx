import { createContext, useState } from "react";

export const GameContext = createContext();

function GameProvider({ children }) {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [category, setCategory] = useState("");
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [currentPlayer, setCurrentPlayer] = useState("player1");

  return (
    <GameContext.Provider
      value={{ player1Name,setPlayer1Name,player2Name,setPlayer2Name,
        category,setCategory, scores,setScores, currentPlayer,setCurrentPlayer }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;