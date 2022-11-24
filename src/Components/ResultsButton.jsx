import React from 'react'

const ResultsButton = ({count, score}) => {

  return (
    <div className='results-btn'>
    <button
    onClick={count}>
        Check Answers
    </button>

<p>you got {score} points</p>

    </div>
  )
}

export default ResultsButton