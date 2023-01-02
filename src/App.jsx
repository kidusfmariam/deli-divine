import {react, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
function App() {

  return (
    <>
    <Router>
    <AnimatePresence>
      <Navbar/>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </AnimatePresence>
    </Router>
    </>
      
  )
}

export default App
