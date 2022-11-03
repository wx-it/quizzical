import React from 'react'
import { useState } from 'react'
const Answer = (props) => {

  const [answer, setAnswer] = useState(props.state); 
  function toggle(){
    setAnswer(prevAnswer=> !prevAnswer)
  }


  const ToggleColor = {
    backgroundColor: answer ? '#abd5bd' : 'transparent'
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