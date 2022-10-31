import React from 'react'
//import {nanoid} from 'nanoid'
import {useState} from 'react'

const Questions = ({questions}) => {

  const[color, setColor] = useState(false)

  function changeColor(){
    setColor(prevColor=> !prevColor)
  }

  //put all answers in an array and randomize them
  
  function getAnswers(){
    const answers = []
    questions.map((question)=>{
      let incorrect = question.incorrect_answers;
      for (let i = 0; i < incorrect.length; i++) {
        answers.push(incorrect)
      }
      let correct = question.correct_answer;
      for (let i = 0; i < correct.length; i++) {
        answers.push(correct)
      }
     
    })
    console.log(answers)
  }
  console.log(getAnswers())




  return (
    <>
          {questions.map((questions)=>(
          <div className='quiz-questions'>
            <p className='question'>{questions.question}</p>
           <div className="answers">
              {getAnswers}
           </div>
          </div>
        )
      )}
    </>
  )
}

export default Questions