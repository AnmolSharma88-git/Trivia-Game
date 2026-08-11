function QuestionCard({ question , questionIndex}) {
    return (
        <div className="p-2">
            <div className="flex justify-between items-center text-xl mx-2">
                <p className="font-semibold" ><strong>Difficulty:</strong> {question.difficulty}</p>
                <p className="font-semibold"><strong>Category:</strong> {question.category}</p>
            </div>
            <h2 className="text-3xl font-semibold mt-4">
               {questionIndex+1}. {question.question.text}
            </h2>
            {/* ANSWER OPTION */}
            {/* <div className="grid grid-cols-2 gap-3 mt-4">
                {options.map((option)=>(
                    <button key={option} onClick={()=>onSelect(option)} 
                    className={
                    selected === option
                        ? "bg-blue-400 text-white-xl p-3 rounded-lg"
                        : "border text-xl p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-400"}
                    >
                    {option}
                    </button>
                ))}
            </div> */}
        </div>
        
    );
}


export default QuestionCard;