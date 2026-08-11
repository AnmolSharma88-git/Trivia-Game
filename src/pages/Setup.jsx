import { useState, useRef, useEffect, useContext } from "react";
import { GameContext } from "../context/GameContext";

import {useNavigate} from "react-router-dom";
import CategoryList from "../components/CategoryList";

function Setup(){
    const[p1Name,setP1Name]=useState("");
    const[p2Name,setP2Name]=useState("");
    const [categories,setCategories]=useState([]);

    const player1Ref =useRef(null);
    useEffect(()=>{
        player1Ref.current.focus();
    },[]); 

    useEffect(() => {
    fetch("https://the-trivia-api.com/api/categories")
        .then((res) =>res.json())
        .then((data) => {
            console.log(data);
            setCategories(Object.keys(data));
            console.log(Object.keys(data));
        });
    }, []);

    const navigate = useNavigate();
    const {setPlayer1Name,setPlayer2Name,setCategory,setScores,setCurrentPlayer,} = useContext(GameContext);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [error,setError] = useState("");

    // const categories =["Science","History","Sports","Geography","Politics","Entertainment"];

    function startGame() {
        if (p1Name.trim()===""){
            setError("Please enter Player 1 name.");
            return ;
        } else if (p2Name.trim()===""){
            setError("Please enter Player 2 name.");
            return ;
        } else if (selectedCategory===""){
            setError("Please select a category.");
            return;
        } else {
            setError("");
        }

        setPlayer1Name(p1Name);
        setPlayer2Name(p2Name);
        setCategory(selectedCategory);

        setScores({
            player1: 0,
            player2: 0,
        });
        setCurrentPlayer("player1");

        navigate("/game");
    }

    return (
        <div className="min-h-screen bg-slate-200 ">
            <nav className="bg-blue-600 shadow-sm">
                <div className="max-w-5xl mx-auto flex justify-between items-center py-4">

                    <h1 className="text-3xl font-bold text-white">
                     Trivia Battle
                    </h1>

                    <button
                        onClick={() => navigate("/")}
                        className="border text-xl text-white  bg-blue-600 rounded-lg hover:bg-blue-400 px-10 py-2">
                        Welcome Page
                    </button>

                </div>
            </nav>

            <main className="max-w-5xl mx-auto mt-10 p-4">
                <div className="bg-white rounded-2xl shadow-md p-8">

                    <h2 className="text-3xl text-red-500 font-bold text-center mb-10">
                        ⚙️ Game Setup
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">

                        <section className="text-center">
                            <div className="text-6xl">👤</div>
                            <h3 className="font-semibold my-3">Player 1</h3>

                            <input ref={player1Ref} type="text" placeholder="Enter Name" value={p1Name}
                            onChange={(e) =>{ setP1Name(e.target.value);
                                 setError("");}}
                                className="w-full border rounded-lg p-3"
                            />
                        </section>

                        <section className="text-center">
                            <div className="text-6xl">👤</div>
                            <h3 className="font-semibold my-3">Player 2</h3>

                            <input type="text" placeholder="Enter Name" value={p2Name}
                            onChange={(e) => {setP2Name(e.target.value);
                                setError("");}}
                                className="w-full border rounded-lg p-3"
                            />
                        </section>
                    </div>

                    <hr className="mb-6"/>
                    <h3 className="text-xl font-semibold text-center mb-6">
                        Select Category
                    </h3>


                    <CategoryList
                        categories={categories}
                        selected={selectedCategory}
                        onSelect={(category) =>{
                            setSelectedCategory(category);
                            setError("");
                        }}
                    />

                    {error && (
                        <p className="text-red-500 text-center font-semibold mt-6 ">
                            {error}
                        </p>
                    )}

                    <button onClick={startGame}
                    className="w-full py-4 px-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-800 transition mt-10 " >
                        Start Game
                    </button>

                </div>

            </main>
            
        </div>
    );
}

export default Setup;