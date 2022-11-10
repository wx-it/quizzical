import React from 'react'
import { useState } from 'react'
import Answer from './Answer'
import {nanoid} from 'nanoid'


const Answers = ({questions}) => {

    function GetAnswer(){
        let answers = questions.incorrect_answers.concat(questions.correct_answer)
        let allAnswers = [...new Set(answers)] 
        allAnswers.sort(function(a, b){return 0.5 - Math.random()})
        return allAnswers.map((answer)=>(
          <Answer 
          key={nanoid()} 
          id={nanoid()}
          answer={answer} 
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