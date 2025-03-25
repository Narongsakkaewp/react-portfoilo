import React from 'react'
import './portfolio.css'
import Project from './Project'

const Portfolio = () => {
  return (
    <section className='work section' id='portfolio'>
        <h2 className="section__title" style={{textAlign: "center",margin: "0 auto"}}>Project</h2>
        <span className="section__subtitle">My Project</span>

        <Project/>
    </section>
  )
}

export default Portfolio