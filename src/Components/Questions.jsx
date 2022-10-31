import React from 'react'
//import {nanoid} from 'nanoid'
import {useState} from 'react'

const Questions = ({questions}) => {

  const[color, setColor] = useState(false)

  function changeColor(){
    setColor(prevColor=> !prevColor)
  }

  //put all answers in an array and randomize them
  
  const getAnswers = ()=>{
    let incorrect;
    questions.map((question)=>{
      incorrect = question.incorrect_answers;
      let correct = question.correct_answer;
      return incorrect.push(correct)
    })
    return incorrect.map((answer)=>(       
      <p>{answer}</p>
  ))
  }




  return (
    <>
          {questions.map((questions)=>(
          <div className='quiz-questions'>
            <p className='question'>{questions.question}</p>
           <div className="answers">
              <getAnswers />
           </div>
          </div>
        )
      )}
    </>
  )
}

export default Questions