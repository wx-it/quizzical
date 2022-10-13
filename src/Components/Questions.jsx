import React from 'react'

const Questions = ({questions}) => {
  return (
    <>
          {questions.map((questions)=>(
          <div className='quiz-questions'>
            <p className='question' key={} >{questions.question}</p>
           <div className="answers">
              <p className='correct-answer answer'>{questions.correct_answer}</p>
            <div className='incorrect-answers'>{questions.incorrect_answers.map((answer)=>{
              return(
                <p className='answer incorrect-answer'>{answer}</p>
              )
            })}</div>
           </div>
          </div>
        )
      )}
    </>
  )
}

export default Questions