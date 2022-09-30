import StartPage from "./Pages/StartPage";
import Preferences from './Pages/Preferences';
import {Route, Routes} from 'react-router-dom';
import { useEffect } from "react";

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/Preferences' element={<Preferences />} />
    
          </Routes>
    
    </>
  );
}

export default App;
