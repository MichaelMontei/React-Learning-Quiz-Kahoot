import React from "react";

//The output expects data from the fetch, either a question, correct_answer or an incorrect_answer
//We will need to know which button was clicked, and we need to shuffle the correct answer otherwise it will be always on the left top corner
//We can shuffle elements in an array by using: https://flaviocopes.com/how-to-shuffle-array-javascript/

const outputQuestions = ({ showAnswers, handleAnswer, handleNextQuestion, data : { question, correct_answer, answers },}) => {

return (
    <div className='flex flex-col'>
        <div className='bg-white text-black p-10 rounded-lg shadow-md'>
            <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question}}/>
        </div>

        <div className='grid grid-cols-2 gap-6 mt-4'>
            {answers.map(answer => {
                const bgColor = showAnswers ? answer === correct_answer ? 'bg-green-300' : 'bg-white' : 'bg-white';
                return (

                    <button className={`${bgColor} p-6 text-black font-semi-bold rounded shadow`}
                            onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}/>
                );
            })}
         </div>
        {showAnswers && (
                     <button    onClick={handleNextQuestion}
                                className={`bg-blue-900 white p-4 rounded-lg shadow-md mt-6 ml-auto`}>Next Question</button>
            )}
    </div>
)};

export default outputQuestions;