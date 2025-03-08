import React from 'react'
import './App.css'
import Header from './components/header/header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/skills';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
    </main>
    </>
  )
}

export default App