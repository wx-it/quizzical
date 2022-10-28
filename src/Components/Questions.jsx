import React from 'react'
//import {nanoid} from 'nanoid'
import {useState} from 'react'

const Questions = ({questions}) => {

  const[color, setColor] = useState(false)

  function changeColor(){
    setColor(prevColor=> !prevColor)
  }

  //put all answers in an array and randomize them
  
  function getAnswers(questions){
    
  }
 const allAnswers = questions.map((questions)=>{
    const answers = []
    answers.push(questions.incorrect_answers.map((answer) => answer))
    answers.push(questions.correct_answer)
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = answers[i]
      answers[i] = answers[j]
      answers[j] = temp
    }

 console.log(answers)
  })

  console.log(allAnswers)


  return (
    <>
          {questions.map((questions)=>(
          <div className='quiz-questions'>
            <p className='question'>{questions.question}</p>
           <div className="answers">
              {allAnswers}
           </div>
          </div>
        )
      )}
    </>
  )
}

export default Questions