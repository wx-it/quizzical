import React from 'react'
import { useState } from 'react'
const Answer = (props) => {

  //toggle answer when answer is clicked

  const [answer, setAnswer] = useState(props.state); 
  //!
  function toggle(){
    setAnswer(prevAnswer=> !prevAnswer)
  }


  const Style = {
    backgroundColor: answer ? '#abd5bd' : 'transparent'
  }

  return (
    <>
      <p className='answer' 
         style={Style}
         onClick={toggle}
         >{props.answer}</p>
    </>
  )
}

export default Answer