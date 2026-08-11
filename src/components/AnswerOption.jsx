function AnswerOption({options , selected , onSelect}){
    return (
        <div className="grid grid-cols-2 gap-3 mt-4">
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
        </div>
    );
}

export default AnswerOption;