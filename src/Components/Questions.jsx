import React from 'react'
import {nanoid} from 'nanoid'
import {useState} from 'react'

const Questions = ({questions}) => {

  const[color, setColor] = useState(false)

  function changeColor(){
    setColor(prevColor=> !prevColor)
  }

  const Style = {
    backgroundColor: 'black'
  }

  return (
    <>
          {questions.map((questions)=>(
          <div className='quiz-questions' key={nanoid.id}>
            <p className='question' key={nanoid.id}>{questions.question}</p>
           <div className="answers" key={nanoid.id}>
              <p className={color ? {Style} : 'answer'} key={nanoid.id} onClick={changeColor}>{questions.correct_answer}</p>
            <div className='incorrect-answers' key={nanoid.id}>{questions.incorrect_answers.map((answer)=>{
              return(
                <p className='answer incorrect-answer' key={nanoid.id}>{answer}</p>
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