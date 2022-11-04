import React from 'react'
import { useState } from 'react'
const Answer = (props) => {

  const [answer, setAnswer] = useState(props.state); 
  function toggle(){
    setAnswer(prevAnswer=> !prevAnswer)
  }

  console.table(answer)

  const ToggleColor = {
    backgroundColor: answer ? '#abd5bd' : 'transparent',
    border: answer ? '1px white solid' : '1px #4d5b9e solid',
    transition: answer ? '0.5s ease-in' : '0.5s ease-in'
  }

  return (
    <>
      <p className='answer' 
         style={ToggleColor}
         onClick={toggle}
         >{props.answer}</p>
    </>
  )
}

export default Answer