import { useContext } from "react";
import { GameContext } from "../context/GameContext";

function ScoreCard() {
    const {player1Name,player2Name,scores,} = useContext(GameContext);
    return (
        <div className="border bg-slate-200 rounded-lg p-5 my-5">
            <h2 className="text-xl font-bold mb-3">Scores</h2>
            <p>{player1Name}: {scores.player1}</p>
            <p>{player2Name}: {scores.player2}</p>
        </div>
    );
}

export default ScoreCard;