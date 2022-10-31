import React from 'react'
//import {nanoid} from 'nanoid'
import {useState} from 'react'
import Answers from './Answers';

const Questions = ({questions}) => {

  const[color, setColor] = useState(false)

  function changeColor(){
    setColor(prevColor=> !prevColor)
  }

  //put all answers in an array and randomize them
  
  return (
    <>
          {questions.map((questions)=>(
          <div className='quiz-questions'>
            <p className='question'>{questions.question}</p>
           <div className="answers">
              <Answers questions = {questions}/>
           </div>
          </div>
        )
      )}
    </>
  )
}

export default Questions