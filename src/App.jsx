import { useState } from 'react'
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import MainPage from "./pages/MainPage";
import Handel from './pages/Handel';
import Mietinstrumente from './pages/Mietinstrumente';
import Reparatur from './pages/Reparatur';
import Neubau from './pages/Neubau';
import Kontakt from './pages/Kontakt';
import HeaderLayout from "./components/HeaderLayout";
import Impressum from './pages/Impressum';
import Test from "./pages/test";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   
    <Routes>
        
        <Route path='/' element={<HeaderLayout><MainPage/></HeaderLayout>}/>
        <Route path='/impressum' element={<Impressum/>}/>
        <Route path='/test' element={<Test/>}/>

        <Route path='/handel' element={<HeaderLayout><Handel /></HeaderLayout>}/>
        <Route path='/mietinstrumente' element={<HeaderLayout><Mietinstrumente/></HeaderLayout>}/>
        <Route path='/reparatur' element={<HeaderLayout><Reparatur/></HeaderLayout>}/>
        <Route path='/neubau' element={<HeaderLayout><Neubau/></HeaderLayout>}/>
        <Route path='/kontakt' element={<HeaderLayout><Kontakt/></HeaderLayout>}/>
      
    </Routes>
   </div>
  )
}

export default App
