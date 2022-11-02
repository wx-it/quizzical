import React from 'react'
import {useState} from 'react'
import Answers from './Answers';
import { nanoid } from 'nanoid';

const Questions = ({questions}) => {
  
  return (
    <>
          {questions.map((questions)=>(
          <div className='quiz-questions' key={nanoid()}>
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