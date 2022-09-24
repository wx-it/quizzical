import StartPage from "./Pages/StartPage";
import Quizz from "./Pages/Quizz";
import {Route, Routes} from 'react-router-dom';
import { useEffect } from "react";

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/quizz' element={<Quizz />} />
    
          </Routes>
    
    </>
  );
}

export default App;
