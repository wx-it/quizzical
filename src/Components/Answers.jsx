import React from 'react'

const Answers = ({questions}) => {


    function GetAnswer(){
        let incorrect = questions.incorrect_answers
        let correct = questions.correct_answer
        incorrect.push(correct)
        let allAnswers = [...new Set(incorrect)] 
        allAnswers.sort(function(a, b){return 0.5 - Math.random()})
        return allAnswers.map((answer)=>(
            <p className='answer'>{answer}</p>
        ))
    }

  return (
    <>
        <GetAnswer />
    </>
  )
}

export default Answers