import React from 'react'
import {useState} from 'react'
import Answers from './Answers';
import { nanoid } from 'nanoid';

const Questions = ({questions}) => {
  
  return (
    <>
          {questions.map((questions)=>(
          <div className='quiz-questions'>
            <p className='question'>{questions.question}</p>
           <div className="answers">
              <Answers key={nanoid()} questions = {questions}/>
           </div>
          </div>
        )
      )}
    </>
  )
}

export default Questions