import StartForm from '../Components/StartForm'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Quizz = () => {

  const [categories, setCategories] = useState([])
  useEffect(()=>{
    data()
  }, [])
  
  const data = async() =>{
    const categories = await fetch('https://opentdb.com/api_category.php')
    const response = await categories.json()
    const data = response.trivia_categories
    setCategories(prevCategories=> data)
  }

  return (
    <div className='start-form'>
     <div className='start-form-content'>
        <h1>Quizzical</h1>
        <p>Pick your preference to start</p>
        <StartForm categories={categories} />
        <button><Link>Start</Link></button>
     </div>
    </div>
  )
}

export default Quizz