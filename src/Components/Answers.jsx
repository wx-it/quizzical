import React from 'react'

const Answers = ({questions}) => {


    function GetAnswer(){
        let incorrect = questions.incorrect_answers
        let correct = questions.correct_answer
        incorrect.push(correct)
        return incorrect.map((answer)=>(
            <p className='answer'>{answer}</p>
        ))
    }

    //filter out all the same answers

  return (
    <>
        <GetAnswer />
    </>
  )
}

export default Answers