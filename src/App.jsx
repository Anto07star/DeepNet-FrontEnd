
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'

import Header from './Components/Header'
import Home from './Components/Home'
import Drinks from './Pages/Drinks'
import Food from './Pages/Food'
import Brunch from './Pages/Brunch'
import Admin from './Pages/Admin'

function App() {
  const location=useLocation()


  return (
    <>
<Header/>
{location.pathname !=='/admin' &&<Home/>}

<Routes>
  <Route path='/' element={<Drinks/>}/>
  <Route path='/foods' element={<Food/>}/>
  <Route path='/brunch' element={<Brunch/>}/>
  <Route path='/admin' element={<Admin/>}/>


</Routes>
<Footer/>

   
    </>
  )
}

export default App
