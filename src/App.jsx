import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'

const App = () => {
  return (

    <Router>

      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/About' element={<AboutPage />}/>
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/Service' element={<ServicesPage/>} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </Router>

    
  )
}

export default App
