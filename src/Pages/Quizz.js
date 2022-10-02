import React from 'react'
import { useEffect } from 'react'
const Quizz = ({data}) => {
    console.log(data)
    useEffect(()=>{
        dataQuestions()
    },[])

    const dataQuestions = async() =>{
        const fetchData = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
        const response = await fetchData.json()
        const data = console.log(response)
      }
    

  return (
    <div>

    </div>
  )
}

export default Quizz