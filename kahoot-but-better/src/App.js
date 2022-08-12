//Import the useState and useEffect
import React, {useState, useEffect} from "react";
import './App.css';
import Questions from "./Components/Questions";
import Header from "./Components/Header";

//API url
const api_url = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple';

function App() {

    //Let's make a useState with an empty array
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setcurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswers, setshowAnswers] = useState(false);

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
        if(!showAnswers) { //prevent double answers
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1);
            }
        }
       setshowAnswers(true);
    };

    const handleNextQuestion = () => {
        setshowAnswers(false);
        setcurrentIndex(currentIndex + 1);
    }

    //We got our data stored inside the State questions, so now we can check the API in our console.log to get our question and answer by going in the index and get the .question .correct_answer etc...
    return questions.length > 0 ? (
        <div className="container">
            {currentIndex >= questions.length ? (
        <h1  className="text-3xl font-bold">Your Score is: {score}!</h1>
                ) : (
                    <Questions data={questions[currentIndex]}
                               showAnswers={showAnswers}
                               handleNextQuestion={handleNextQuestion}
                               handleAnswer={handleAnswer}/>
                )}
        </div>
        ): (
        <h1 className="text-3xl text-white font-bold">Loading...</h1>
    )
}
export default App;