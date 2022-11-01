import React from 'react'

const Answer = (props) => {
  return (
    <>
      <p className='answer' 
         style={props.Style}
         onClick={props.changeColor}
         >{props.answer}</p>
    </>
  )
}

export default Answer