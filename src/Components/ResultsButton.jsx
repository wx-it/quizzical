import React from 'react'
import ResultPopUp from './ResultPopUp'
const ResultsButton = ({count, score}) => {

  return (
    <div className='results-btn'>
    <button
    type='button'
    onClick={count}
    >
        Check Answers
    </button>
    <ResultPopUp />
    </div>
  )
}

export default ResultsButton