import React from "react";

//We make a button with prop answer and pass it through
const Button = ({answer}) => (
    <button className='bg-white p-4 text-black font-semi-bold rounded shadow mb-1'>{answer}</button>
);

//The output expects data from the fetch, either a question, correct_answer or an incorrect_answer
//We will need to know which button was clicked, and we need to shuffle the correct answer otherwise it will be always on the left top corner
//We can shuffle elements in an array by using: https://flaviocopes.com/how-to-shuffle-array-javascript/

const outputQuestions = ({ handleAnswer, data : { question, correct_answer, incorrect_answers },}) => {
    const shuffleAnswer = [correct_answer, ...incorrect_answers].sort(() => Math.random() -0.5);

return (
    <div>
        <div className='bg-white text-black p-10 rounded-lg shadow-md'>
            <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question}}/>
        </div>

        <div className='grid grid-cols-2 gap-6 mt-4'>
            <Button onClick={() => handleAnswer(shuffleAnswer[0])} answer={shuffleAnswer[0]}/>
            <Button onClick={() => handleAnswer(shuffleAnswer[1])} answer={shuffleAnswer[1]}/>
            <Button onClick={() => handleAnswer(shuffleAnswer[2])} answer={shuffleAnswer[2]}/>
            <Button onClick={() => handleAnswer(shuffleAnswer[3])} answer={shuffleAnswer[3]}/>
         </div>
    </div>
)};

export default outputQuestions;