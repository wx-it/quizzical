import React from 'react'

const ResultsButton = () => {

  function getCount(props){
    let correct = props.questions.correct_answer
    console.log(correct)

      if(props.answer === correct){
        console.log('Correct');
       } 
       else {
          console.log('Incorrect');
        }
  }
  


  return (
    <div className='results-btn'>
    <button>
        Check Answers
    </button>
    </div>
  )
}

export default ResultsButton