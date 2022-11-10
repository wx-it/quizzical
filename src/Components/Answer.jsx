import React from 'react'
import { useState } from 'react'
const Answer = (props) => {

  const [answer, setAnswer] = useState(false); 
  function toggle(){
    return setAnswer(prevAnswer=> !prevAnswer)
  }

  //work on this

  const ToggleColor = {
        backgroundColor: answer ? '#D6DBF5' : 'transparent',
        border: answer ? '1px white solid' : '1px #4d5b9e solid',
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