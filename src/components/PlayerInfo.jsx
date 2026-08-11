import { useContext } from "react";
import { GameContext } from "../context/GameContext";

function PlayerInfo() {
    const {player1Name,player2Name,category,} = useContext(GameContext);

    return (
        <div className=" bg-slate-200 border rounded-lg p-5 mb-6 font-semibold">
            <p className="text-xl font-bold text-center">
                Category: {category}
            </p>
            <div className="flex justify-between mx-10 ">
                <p className="text-xl font-semibold">Player 1: {player1Name}</p>
                <p className="text-xl font-semibold">Player 2: {player2Name}</p>
            </div>
                
        </div>
    );
}

export default PlayerInfo;