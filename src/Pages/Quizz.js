import React from 'react'
import { useEffect, useState } from 'react'
const Quizz = ({data}) => {
    useEffect(()=>{
        dataQuestions()
    },[])

    const dataQuestions = async() =>{
        const fetchData = await fetch(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.difficulty}&type=multiple`)
        const response = await fetchData.json()
        const questionsData = response.results
        console.log(questionsData)
        setQuestions(prevQuestions => questionsData)
      }
    

      const [questions, setQuestions] = useState([])

  return (
    <div className='quiz-questions-container'>
      {questions.map((questions)=>(
          <div className='quiz-questions'>
            <p className='question' >{questions.question}</p>
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
    </div>
  )
}

export default Quizz