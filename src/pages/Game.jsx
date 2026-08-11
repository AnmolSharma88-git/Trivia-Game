
import { useContext, useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import useFetchQuestions from "../hooks/useFetchQuestions";
import PlayerInfo from "../components/PlayerInfo";
import TurnIndicator from "../components/TurnIndicator";
import QuestionCard from "../components/QuestionCard";
import ScoreCard from "../components/ScoreCard";
import AnswerOption from "../components/AnswerOption";


function Game() {
    const navigate = useNavigate();

    const {player1Name,player2Name,category,scores,setScores,currentPlayer,
        setCurrentPlayer,} = useContext(GameContext);
    const { questions, loading } = useFetchQuestions(category);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const currentQuestion = questions.length > 0 ? questions[questionIndex] : null;
    
    const [allOptions, setAllOptions] =useState([]);
    useEffect(()=>{
        console.log("currentQuestion: ",currentQuestion);
        if (currentQuestion){
            console.log("Correct Answer:", currentQuestion.correctAnswer);
            const options = [currentQuestion.correctAnswer,
                ...currentQuestion.incorrectAnswers,
            ];
            options.sort(()=>Math.random() - 0.5);
            setAllOptions(options);
        }
    },[currentQuestion]);
   

    function nextQuestion() {
        if (selectedAnswer === "") {
            alert("Please select an answer!");
            return;
        }

        setSelectedAnswer("");

        let points = 0;
        if (currentQuestion.difficulty ==="easy"){
            points = 10;
        } else if (currentQuestion.difficulty === "medium"){
            points = 15;
        } else {
            points = 20;
        }

        if (selectedAnswer === currentQuestion.correctAnswer){
            if(currentPlayer==="player1"){
                setScores({...scores,player1 : scores.player1 + points});
            } else{
                setScores({...scores,player2 : scores.player2 + points });
            }
            console.log("correct answer from nextquestion func in game ");
        } else{
            console.log("Wrong answer from nextquestion fun in game ");
        }

        if (currentPlayer === "player1"){
            setCurrentPlayer("player2");
        } else {
            setCurrentPlayer("player1");
        }

        setSelectedAnswer("");

        if (questionIndex === questions.length - 1) {
            navigate("/scoreboard");
        } else {
            setQuestionIndex(questionIndex + 1);
        }
    }

    if (loading) {
        return <h2 className="text-center mt-10">Loading Questions...</h2>;
    }

    return (
        <div className="min-h-screen bg-slate-100">

            {/* Navbar */}
            <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-4">
                <h1 className="text-3xl font-bold">Trivia Battle</h1>

                <button onClick={() => navigate("/setup")}
                className="bg-white text-blue-600 px-5 py-2 rounded-lg">
                    Back
                </button>
            </nav>

            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-8">
                {/* Player Details */}
                {/* Category */}
                <PlayerInfo/>
                {/* <div className="border rounded-lg p-3 mb-6">
                    <p className="font-semibold">
                        Category: {category}
                    </p>
                </div> */}

                <TurnIndicator />
                {/* <ScoreCard /> */}
                <div className="bg-slate-200 border rounded-lg p-5 my-6">
                    <QuestionCard question={currentQuestion} questionIndex={questionIndex}/>
                    <AnswerOption
                    options={allOptions}
                    selected={selectedAnswer}
                    onSelect={setSelectedAnswer}
                    />
                </div>
               
                {/* <QuestionCard question={currentQuestion} questionIndex={questionIndex}
                />

                <AnswerOption
                    options={allOptions}
                    selected={selectedAnswer}
                    onSelect={setSelectedAnswer}
                /> */}
                <div className="flex justify-end mt-6">
                    <button onClick={nextQuestion} className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                        Next Question
                    </button>
                </div>
                

            </div>
        </div>
    );
}

export default Game;





























// import { useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { GameContext } from "../context/GameContext";
// import useFetchQuestions from "../hooks/useFetchQuestions";
// import AnswerOption from "../components/AnswerOption";


// function Game() {

//     const { player1Name, player2Name, category, scores, setScores , currentPlayer ,setCurrentPlayer, } = useContext(GameContext);
//     console.log("Category in Game:", category);
//     const { questions , loading } = useFetchQuestions(category);
//     const [questionIndex, setQuestionIndex] = useState(0);
//     const currentQuestion = questions.length > 0 ? questions[questionIndex] : null;
    
//     useEffect(()=>{
//         if (currentQuestion){
//             const options = [currentQuestion.correctAnswer,...currentQuestion.incorrectAnswers,];
//             options.sort(()=>Math.random() -0.5);
//             setAllOptions(options);
//         }
//     },[currentQuestion]);

//     console.log(questions);
//     const [selectedAnswer,setSelectedAnswer] = useState("");
//     const [allOptions, setAllOptions] = useState([]);
//     const navigate = useNavigate();

//     function nextQuestion(){
        
//         if (selectedAnswer === ""){
//             alert("Please select an answer.");
//             return;
//         }

//         let points=0;
//         if (currentQuestion.difficulty ==="easy"){
//             points=10;
//         } else if (currentQuestion.difficulty ==="medium"){
//             points=15;
//         } else {
//             points = 20;
//         }

//         if (selectedAnswer === currentQuestion.correctAnswer){
//             if (currentPlayer ==="player1"){
//                 setScores({...scores,player1: scores.player1+points,
//                 });
//             } else {
//                 setScores({...scores,player2: scores.player2 + points,
//                 });
//             }
//         }

//         if (currentPlayer === "player1"){
//             setCurrentPlayer("player2");
//         } else {
//             setCurrentPlayer("player1");
//         }

//         setSelectedAnswer("");

//         // last question 
//         if (questionIndex === questions.length -1){
//             navigate("/scoreboard");
//         } else{
//             setQuestionIndex(questionIndex + 1);
//         }
//     }

//     return (
//         <div>
//             <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
//                 <h1 className="text-3xl font-bold">Game Page</h1>
//                  <button onClick={() => navigate("/setup")} className="border text-xl text-white  bg-blue-600 rounded-lg hover:bg-blue-400 px-10 py-2">Back</button>
//             </nav>

//             <div className=" border rounded-lg max-w-3xl mx-auto items-center py-4">
//                 <p className="text-xl font-semibold text-gray-800">Player 1: {player1Name}</p>
//                 <p className="text-xl font-semibold text-gray-800">Player 2: {player2Name}</p>
//                 <p className="text-xl font-semibold text-gray-800 ">Category: {category}</p>
//                 <div className="border ">                   
//                     {loading?(
//                         <h2 className="text-center mt-10">Loading Questions...</h2>
//                     ) :(
//                         <div>
//                             <p className ="text-lg font-semibold mt-3">Difficulty : {currentQuestion.difficulty}</p>
//                             <p className="text-xl font-semibold mt-3">Category: {currentQuestion.category}</p>
//                             <h2 className="text-xl text-semibold mt-3">{currentQuestion.question.text}</h2>
//                             <AnswerOption options={allOptions} selected={selectedAnswer} onSelect={setSelectedAnswer}
//                             className=""/>
//                         </div>
//                     )}
//                 </div>
//                 {/* <p className="text-xl font-semibold text-gray-800">Difficulty : {question.difficulty}</p> */}
//                 {/* <AnswerOption options={allOptions} selected={selectedAnswer} onSelect={setSelectedAnswer}/> */}
//                 <button onClick={nextQuestion} className="border text-xl text-white bg-blue-600 rounded-lg hover:bg-blue-400 px-10 py-2 md:px-4 md:py-2 mt-8 ">Next Question</button>
//                 <p className="text-xl font-semibold text-gray-800">Score:<br/> {player1Name}: {scores.player1} | {player2Name}: {scores.player2}</p>

//             </div>

//             <button onClick={()=> navigate("/scoreboard")} className="border text-xl text-white bg-blue-600 rounded-lg hover:bg-blue-400 px-10 py-2 md:px-4 md:py-2 mt-8 ">Scoreboard</button>
//         </div>
//     );
// }

// export default Game;