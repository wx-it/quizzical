import React from 'react'
import { useState } from 'react'
import Answer from './Answer'
import {nanoid} from 'nanoid'


const Answers = ({questions}) => {

  const[color, setColor] = useState(false)

  function changeColor(){
    setColor(prevColor=> !prevColor)
  }

  const Style ={
    backgroundColor: color ? 'red' : 'transparent'
  }

    function GetAnswer(){
        let incorrect = questions.incorrect_answers
        let correct = questions.correct_answer
        incorrect.push(correct)
        let allAnswers = [...new Set(incorrect)] 
        allAnswers.sort(function(a, b){return 0.5 - Math.random()})
        return allAnswers.map((answer)=>(
          <Answer 
          key={nanoid()} 
          answer={answer} 
          Style={Style} 
          changeColor={changeColor} 
          />
        ))
    }

  return (
    <>
        <GetAnswer />
    </>
  )
}

export default Answers