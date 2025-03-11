import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Award</h3>
            <span className="about__subtitle">10+ awards from School</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt-2 about__icon' ></i>
            <h3 className="about__title">Project</h3>

            <span className="about__subtitle">Graduated Project</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Connect</h3>
            <span className="about__subtitle">Ontime 9-5</span>
        </div>
    </div>
  )
}

export default Info