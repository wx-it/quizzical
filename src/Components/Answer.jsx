import React from 'react'
import { useState } from 'react'
const Answer = (props) => {

  const [answer, setAnswer] = useState(false); 
  function toggle(){
    return setAnswer(prevAnswer=> !prevAnswer)
  }

  //foreach answer clicked , console log answer clicked

  //if one answer is true in a row then the other must be automaticaly 
  //set to false
  console.log(answer)

  const ToggleColor = {
        backgroundColor: answer ? '#D6DBF5' : 'transparent',
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