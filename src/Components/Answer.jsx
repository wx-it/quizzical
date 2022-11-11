import React from 'react'
const Answer = (props) => {

  const toggle = function (e){
    const theAnswers = e.target.closest('.answers');
    const theAnswer = e.target.closest('.answer');
    const all = theAnswers.querySelectorAll('.answer')
    if(!theAnswers)return;
    all.forEach((answer) => answer.classList.remove("active"));
    theAnswer.classList.add("active");
}

  return (
    <>
      <button className='answer' 
         onClick={toggle}
         >{props.answer}</button>
    </>
  )
}

export default Answer