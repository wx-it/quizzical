import React from 'react'
import { useEffect, useState } from 'react'
import Questions from '../Components/Questions'
import ResultsButton from '../Components/ResultsButton'
import ResultPopUp from '../Components/ResultPopUp'
import { nanoid } from 'nanoid'


const Quizz = ({data}) => {
    useEffect(()=>{
      dataQuestions()
    },[])
    
    const [questions, setQuestions] = useState([])
    let score = 0
  
    
    const dataQuestions = async() =>{
        const fetchData = await fetch(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.difficulty}&type=multiple`)
        const response = await fetchData.json()
        const questionsData = response.results
        //console.log(questionsData)
        setQuestions(prevQuestions => questionsData)
      }
      
      const toggle = function (e){
        e.preventDefault()
        const theAnswers = e.target.closest('.answers');
        const theAnswer = e.target.closest('.answer');
        const all = theAnswers.querySelectorAll('.answer')
        if(!theAnswers)return; 
        all.forEach((answer) => answer.classList.remove("active"));
        theAnswer.classList.add("active")
    }

    const handleClick = (e)=>{
      e.preventDefault()
      let correct = questions.map(q => q.correct_answer)
      console.log(correct)
     for (let i = 0; i < correct.length; i++) {
       const answer = correct[i];
       if(e.currentTarget.textContent === answer){
         score ++
      }
  }
    }
      
    function Answers({questions}){
      let answers = questions.incorrect_answers.concat(questions.correct_answer)
      let allAnswers = [...new Set(answers)] 
      allAnswers.sort(function(a, b){return 0.5 - Math.random()})
      
        return allAnswers.map((answer)=>(
          <button
          type='button'
          className='answer'
          key={answer}
          onClick={(e)=>{toggle(e); handleClick(e)}}
          >
            {answer}
          </button>
        ))
      } 
      
      
      let all = questions.map((q)=>(
        <div className='quiz-questions' key={nanoid()}>
          <p className='question'>{q.question}</p>
         <div className="answers">
            <Answers questions={q} />
         </div>
        </div>
      )
    )


    function count(e){
      e.preventDefault()
      let results = `You got ${score}/10`
      let result = document.querySelector('.result')
      result.textContent = results
      console.log(result.textContent)
    }
    

  return (
    <div className='quiz-questions-container'>
    <Questions questions={questions} all={all} />
    <ResultsButton questions ={questions} count={count} score={score} />
    </div>
  )
}

export default Quizz