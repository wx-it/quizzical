import React from 'react'

const ResultsButton = ({getCount}) => {



  return (
    <div className='results-btn'>
    <button
    onClick={getCount}
    >
        Check Answers
    </button>
    </div>
  )
}

export default ResultsButton