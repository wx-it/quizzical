import StartPage from "./Components/StartPage";
import Quizz from "./Components/Quizz";
import {Route, Routes, Link} from 'react-router-dom';

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
