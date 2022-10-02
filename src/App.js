import StartPage from "./Pages/StartPage";
import Preferences from './Pages/Preferences';
import Quizz from "./Pages/Quizz";
import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {

  const [categories, setCategories] = useState([])
  useEffect(()=>{
    data()
  }, [])
  
  const data = async() =>{
    const fetchData = await fetch('https://opentdb.com/api_category.php')
    const response = await fetchData.json()
    const data = response.trivia_categories
    setCategories(prevCategories=> data)
  }

  const [getData, setGetData] = useState({
    name: '',
    category: '',
    difficulty: ''
})
  return (
    <>
        <Routes>
            <Route path='/' element={<StartPage categories={categories} data={getData} setData={setGetData} />} />
            <Route path='/Preferences' element={<Preferences categories={categories} data={getData} setData={setGetData}  />} />
            <Route path='/Quiz' element={<Quizz categories={categories} data={getData} setData={setGetData} />} />
    
          </Routes>
    
    </>
  );
}

export default App;
