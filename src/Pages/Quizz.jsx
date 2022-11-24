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
    
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)

    const dataQuestions = async() =>{
        const fetchData = await fetch(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.difficulty}&type=multiple`)
        const response = await fetchData.json()
        const questionsData = response.results
        //console.log(questionsData)
        setQuestions(prevQuestions => questionsData)
      }

    }

    // toggle answer when clicked + get the correct answer
    const toggle = function (e, questions){
      let correct = questions.map(q => q.correct_answer)
      const theAnswers = e.target.closest('.answers');
      const theAnswer = e.target.closest('.answer');
      const allAnswers = theAnswers.querySelectorAll('.answer')
      if(!theAnswers)return; 
      allAnswers.forEach((answer) => answer.classList.remove("active"));
      theAnswer.classList.add("active")
      
     console.log(correct)

     
     for (let i = 0; i < correct.length; i++) {
       const answer = correct[i];
       if(e.currentTarget.textContent === answer){
        setScore(score => score++)
      }
    }

    // display all answers
    function Answers({questions}){
      let answers = questions.incorrect_answers.concat(questions.correct_answer)
      let allAnswers = [...new Set(answers)] 
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

      // get all questions
      let all = questions.map((q)=>(
        <div className='quiz-questions' key={nanoid()}>
          <p className='question'>{q.question}</p>
         <div className="answers">
            <Answers questions={q} />
         </div>
        </div>
      )
    )

    //target the results button
    function count(){
      console.log('clicked')
    }


  return (
    <div className='quiz-questions-container'>
    <Questions questions={questions} all={all} />
    <ResultsButton questions ={questions} count={count} />
    </div>
  )
}

export default Quizz