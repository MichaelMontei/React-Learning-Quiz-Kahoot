//Import the useState and useEffect
import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Components/Header";

//API url
const api_url = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy';

function App() {

    //Lets make a useState with an empty array
    const [questions, setQuestions] = useState([]);

    //Lets fetch the data from tha API and set questions to hold all to the data.
    useEffect(() => {
        fetch(api_url)
            .then (res => res.json())
            .then((data) => {
                setQuestions(data.results);
                console.log(data);
            });
    }, [])

    //We got our data stored inside the State questions, so now we can check the API in our console.log to get our question and answer by going in the index and get the .question .correct_answer etc...

    return questions.length > 0 ? (
    <div className="container">
        <div className='bg-white text-black p-10 rounded-lg shadow-md'>
            <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: questions[0].question}}/>
        </div>

        <div className='grid grid-cols-2 gap-6 mt-4'>
            <button className='bg-white p-4 text-black font-semibold rounded shadow mb-1'>{questions[0].correct_answer}</button>
            <button className='bg-white p-4 text-black font-semibold rounded shadow mb-1'>{questions[0].incorrect_answers[0]}</button>
            <button className='bg-white p-4 text-black font-semibold rounded shadow mb-1'>{questions[0].incorrect_answers[1]}</button>
            <button className='bg-white p-4 text-black font-semibold rounded shadow mb-1'>{questions[0].incorrect_answers[2]}</button>
        </div>
    </div>
    ) : (
        <h1 className="text-3xl text-white font-bold">Loading...</h1>
    )

}
export default App;