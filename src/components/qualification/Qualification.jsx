import React from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = React.useState(1);
    const toggletab = (index) => {
        setToggleState(index);
    }

    return (
    <section className="qualification section">
        <h2 className="section__title" style={{textAlign: "center",margin: "0 auto"}}>Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} 
                onClick={() => toggletab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} 
                onClick={() => toggletab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Industrial Technology (B.Ind .Tech.)</h3>
                            <span className="qualification__subtitle">King Mongkut's University of Technology North Bangkok (KMUTNB)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title" style={{ fontFamily: 'poppins, "Noto Sans Thai", sans-serif' }}>High Vocational Certificate of IT</h3>
                            <span className="qualification__subtitle">SIAM BUSINESS ADMINISTRATION NONTHABURI TECHNOLOGICAL COLLEGE (SBAC)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title" style={{ fontFamily: 'poppins, "Noto Sans Thai", sans-serif' }}>Vocational Certificate of IT</h3>
                            <span className="qualification__subtitle">SIAM BUSINESS ADMINISTRATION NONTHABURI TECHNOLOGICAL COLLEGE (SBAC)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title" style={{ fontFamily: 'poppins, "Noto Sans Thai", sans-serif' }}>Secondary School</h3>
                            <span className="qualification__subtitle">Wat Na Mai Community School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2015 - 2017
                            </div>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Hiring Me Please.</h3>
                            <span className="qualification__subtitle">Still Looking for a Job since i graduated.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2025 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification