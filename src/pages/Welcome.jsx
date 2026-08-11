import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-400 flex items-center justify-center px-4">
      <div className="bg-white w-md-full rounded-3xl shadow-lg p-10 text-center">

        {/* <div className="text-6xl mb-6">🧠</div> */}

        <h1 className="text-5xl font-bold text-slate-900">
          Trivia Battle
        </h1>

        <p className="text-slate-800 mt-6 text-xl">
          Welcome to Trivia Battle!...
        </p>
        <div className="text-3xl my-3">
          👧 ⚡ 👧
        </div>
        <p className="text-slate-800 mt-6 text-xl">
          Challenge a friend in a fun quiz.
        </p>

        <div className="flex justify-center gap-2 mt-6 text-md text-slate-600">
          <span className="bg-slate-400   text-white text-semibold px-3 py-1 rounded-full">2 Players</span>
          <span className="bg-slate-400  text-white text-semibold px-3 py-1 rounded-full">6 Questions</span>
          <span className="bg-slate-400  text-white text-semibold px-3 py-1 rounded-full">winner</span>
        </div>

        <button
          onClick={() => navigate("/setup")}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-xl font-medium transition"
        >
          Start Game
        </button>

      </div>
    </div>
  );
}

export default Welcome;