import StartForm from '../Components/StartForm'
import { useEffect, useState } from 'react'

const Quizz = () => {

  const [categories, setCategories] = useState([])
  useEffect(()=>{
    data()
  }, [])
  
  const data = async() =>{
    const categories = await fetch('https://opentdb.com/api_category.php')
    const response = await categories.json()
    const data = response.trivia_categories
    setCategories(prevCategories=> data )
  }

  return (
    <div>
      <StartForm categories={categories} />

    </div>
  )
}

export default Quizz