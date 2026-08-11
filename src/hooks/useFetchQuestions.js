import { useState, useEffect } from "react";

function useFetchQuestions(category) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      console.log("Category received:", category);
      const [easyRes, mediumRes, hardRes] = await Promise.all([
        fetch(`https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=easy`),
        fetch(`https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=medium`),
        fetch(`https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=hard`),
      ]);

      const easy = await easyRes.json();
      const medium = await mediumRes.json();
      const hard = await hardRes.json();
      
      console.log("Easy:", easy);
      console.log("Medium:", medium);
      console.log("Hard:", hard);

      setQuestions([...easy, ...medium, ...hard]);
      setLoading(false);
    }

    if (category){
        fetchQuestions();
    }
  },[category]);

  return { questions, loading };
}

export default useFetchQuestions;