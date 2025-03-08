import React from 'react'
import './skills.css'
import Backend from './Backend'
import Frontend from './Frontend'
import Tools from './Tools'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title" style={{textAlign: "center",margin: "0 auto"}}>Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
            <Tools/>
        </div>
    </section>
  )
}

export default Skills