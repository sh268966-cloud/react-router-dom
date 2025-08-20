import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Buttons from './Components/Buttons'
import Feature from './Components/Feature'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
    
      </div>
      
    </>
  )
}

export default App;
