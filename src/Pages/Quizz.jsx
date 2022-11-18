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
    
      let allAnswers;
      let correct;
      
      const toggle = function (e){
        const theAnswers = e.target.closest('.answers');
        const theAnswer = e.target.closest('.answer');
        const all = theAnswers.querySelectorAll('.answer')
        if(!theAnswers)return; 
        all.forEach((answer) => answer.classList.remove("active"));
        theAnswer.classList.add("active")
        
      }
      
      
    function Answers({questions}){
      correct = questions.correct_answer
      let answers = questions.incorrect_answers.concat(questions.correct_answer)
      allAnswers = [...new Set(answers)] 
      allAnswers.sort(function(a, b){return 0.5 - Math.random()})
      
        return allAnswers.map((answer)=>(
          <button
          className='answer'
          key={nanoid()}
          onClick={toggle}
          >
            {answer}
          </button>
        ))
    } 

    function count(){
    return;
        
       
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
  return (
    <div className='quiz-questions-container'>
    <Questions questions={questions} all={all} />
    <ResultsButton questions ={questions} count={count} />
    </div>
  )
}

export default Quizz