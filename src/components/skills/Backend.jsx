import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Developer</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>
            <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>
            <div>
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__level">Beginner</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">My SQL</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Backend