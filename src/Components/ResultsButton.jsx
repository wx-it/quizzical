import React from 'react'
import ResultPopUp from './ResultPopUp'
const ResultsButton = ({count, score}) => {

  return (
    <div className='results-container'>
      <ResultPopUp />
      
    <button
    type='button'
    onClick={count}
    >
        Check Answers
    </button>
    </div>
  )
}

export default ResultsButton