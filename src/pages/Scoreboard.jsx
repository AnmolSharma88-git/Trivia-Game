

import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { GameContext } from "../context/GameContext";

function Scoreboard() {
    const navigate = useNavigate();
    const {player1Name , player2Name , scores,}= useContext(GameContext);

    let winner ="";
    if (scores.player1 > scores.player2){
        winner =player1Name;
    } else if (scores.player2 > scores.player1){
        winner = player2Name ;
    } else {
        winner ="IT's a TIE !";
    }

    return (
        <div  className="min-h-screen">
            <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between">
                <h1 className="text-3xl font-bold">Scoreboard</h1>

                <button
                        onClick={() => navigate("/")}
                        className="bg-white text-blue-600  text-xl px-5 py-2 rounded-lg font-semibold"
                    >
                        Home
                </button>
            </nav>

            <div className="max-w-5xl mx-auto mt-12">

                <h1 className = "text-3xl font-bold text-center text-blue-600">----SCORE BOARD-----</h1>
                <div className ="mt-10 text-center">
                    <h3 className="text-3xl font-bold text-yesllow-600 p-4">
                    WINNER : {winner}
                    </h3>
                </div>

                <div className="bg-slate-300 px-15  py-20 rounded-xl p-5">

                    <h2 className="text-3xl font-bold text-center mb-5">
                        Final Scores
                    </h2>

                    <div className="bg-green-100 rounded-lg p-4 m px-10 py-8 flex justify-between mb-3">
                        <h3 className="text-4xl font-semibold">
                            👤 {player1Name}
                        </h3>

                        <h3 className="text-3xl font-bold">
                            {scores.player1}
                        </h3>
                    </div>

                    <div className="bg-green-100 rounded-lg p-4 px-10 py-8 flex justify-between">
                        <h3 className="text-4xl font-semibold">
                            👤 {player2Name}
                        </h3>

                        <h3 className="text-3xl font-bold">
                            {scores.player2}
                        </h3>
                    </div>

                </div>

                {/* <div className="flex-justify-between bg-blue-100 rounded-lg ">
                    <h3 className = "text-xl font-semibold">
                        {player1Name}
                    </h3>
                    <h3 className = "text-xl font-bold">
                        {scores.player1}
                    </h3>
                </div>

                <div className="flex-justify-between bg-blue-100 rounded-lg p-4">
                    <h3 className = "text-xl font-semibold">
                        {player2Name}
                    </h3>
                    <h3 className = "text-xl font-bold">
                        {scores.player2}
                    </h3>
                </div> */}
                
                <div className="flex justify-end mt-6 ">
                    <button
                        onClick={() => navigate("/setup")}
                        className="border text-2xl text-white  bg-blue-600 rounded-lg hover:bg-blue-400 px-15 py-4">
                        Play Again 
                    </button>
                </div>
                

                
            </div>
            
        </div>
    );
}

export default Scoreboard;