import React from 'react'
import { useEffect, useState } from 'react'
import Questions from '../Components/Questions'
import ResultsButton from '../Components/ResultsButton'
import { nanoid } from 'nanoid'
import Answers from '../Components/Answers'
import Answer from '../Components/Answer'


const Quizz = ({data}) => {
    useEffect(()=>{
        dataQuestions()
    },[])

    const dataQuestions = async() =>{
        const fetchData = await fetch(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.difficulty}&type=multiple`)
        const response = await fetchData.json()
        const questionsData = response.results
        //console.log(questionsData)
        setQuestions(prevQuestions => questionsData)
      }
    

      const [questions, setQuestions] = useState([])




      let all = questions.map((questions)=>(
        <div className='quiz-questions' key={nanoid()}>
          <p className='question'>{questions.question}</p>
         <div className="answers">
            {
                [...new Set(
                  questions.incorrect_answers.concat(questions.correct_answer)
                )].sort(function(a, b){return 0.5 - Math.random()}).map((answer)=>(
                  <Answer 
                  key={nanoid()} 
                  id={nanoid()}
                  answer={answer} 
                  questions = {questions}
                  />
                ))
        
            }
         </div>
        </div>
      )

      
    )

  return (
    <div className='quiz-questions-container'>
    <Questions questions={questions} all={all} />
    <ResultsButton questions ={questions} />
    </div>
  )
}

export default Quizz