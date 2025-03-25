import React from 'react'
import './App.css'
import Header from './components/header/header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/skills';
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact /> 
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App