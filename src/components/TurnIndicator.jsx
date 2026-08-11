import { useContext } from "react";
import { GameContext } from "../context/GameContext";

function TurnIndicator() {

    const {
        player1Name,
        player2Name,
        scores,
        currentPlayer
    } = useContext(GameContext);

    return (
        <div className="grid grid-cols-2 gap-10 bg-slate-200 border p-4 rounded-lg mb-6">

            {/* Player 1 */}
            <div className="text-center">

                <p className="text-5xl mb-2">
                    👤
                </p>

                <div
                    className={currentPlayer === "player1"
                            ? "border-2 border-green-500 bg-green-50 rounded-lg p-3"
                            : "border rounded-lg p-3 bg-white"
                    }
                >
                    <p className="text-xl font-bold">
                        {player1Name}
                    </p>

                    <p className="text-gray-600">
                        Score: {scores.player1}
                    </p>
                </div>

            </div>


            {/* Player 2 */}
            <div className="text-center">

                <p className="text-5xl mb-2">
                    👤
                </p>

                <div
                    className={currentPlayer === "player2"
                            ? "border-2 border-green-500 bg-green-50 rounded-lg p-3"
                            : "border rounded-lg p-3 bg-white"
                    }
                >
                    <p className="text-xl font-bold">
                        {player2Name}
                    </p>

                    <p className="text-gray-600">
                        Score: {scores.player2}
                    </p>
                </div>

            </div>

        </div>
    );
}

export default TurnIndicator;