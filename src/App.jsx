import { useState } from 'react'
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import MainPage from "./pages/MainPage";
import Handel from './pages/Handel';
import Mietinstrumente from './pages/Mietinstrumente';
import Reparatur from './pages/Reparatur';
import Neubau from './pages/Neubau';
import Kontakt from './pages/Kontakt';
import HeaderFoooterLayout from './components/HeaderFoooterLayout';
import Impressum from './pages/Impressum';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   
    <Routes>
        
        <Route path='/' element={<MainPage/>}/>
        <Route path='/impressum' element={<Impressum/>}/>

        <Route path='/handel' element={<HeaderFoooterLayout><Handel /></HeaderFoooterLayout>}/>
        <Route path='/mietinstrumente' element={<HeaderFoooterLayout><Mietinstrumente/></HeaderFoooterLayout>}/>
        <Route path='/reparatur' element={<HeaderFoooterLayout><Reparatur/></HeaderFoooterLayout>}/>
        <Route path='/neubau' element={<HeaderFoooterLayout><Neubau/></HeaderFoooterLayout>}/>
        <Route path='/kontakt' element={<HeaderFoooterLayout><Kontakt/></HeaderFoooterLayout>}/>
      
    </Routes>
   </div>
  )
}

export default App
