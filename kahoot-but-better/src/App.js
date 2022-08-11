//Import the useState and useEffect
import React, {useState, useEffect} from "react";
import './App.css';
import Questions from "./Components/Questions";
import Header from "./Components/Header";

//API url
const api_url = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy';

function App() {

    //Let's make a useState with an empty array
    const [questions, setQuestions] = useState([]);

    //Let's fetch the data from tha API and set questions to hold all to the data.
    useEffect(() => {
        fetch(api_url)
            .then (res => res.json())
            .then((data) => {
                setQuestions(data.results);
                console.log(data);
            });
    }, [])

    const handleAnswer = (answer) => {
        //bla bla
    }

    //We got our data stored inside the State questions, so now we can check the API in our console.log to get our question and answer by going in the index and get the .question .correct_answer etc...
    return questions.length > 0 ? (
    <div className="container">
        <Questions data={questions[0]} handleAnswer={handleAnswer}/>
    </div>
    ) : (
        <h1 className="text-3xl text-white font-bold">Loading...</h1>
    )
}
export default App;