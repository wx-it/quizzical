import React from 'react'
import { useEffect, useState } from 'react'
import Questions from '../Components/Questions'
import ResultsButton from '../Components/ResultsButton'
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

  return (
    <div className='quiz-questions-container'>
    <Questions questions={questions}/>
    <ResultsButton questions ={questions} />
    </div>
  )
}

export default Quizz