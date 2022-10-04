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
        setQuestions(prevQuestions => questionsData)
      }
    

      const [questions, setQuestions] = useState([])

  return (
    <div>
      {questions.map((questions)=>(
          <div>
            <p>{questions.question}</p>
          </div>
        )
      )}
    </div>
  )
}

export default Quizz