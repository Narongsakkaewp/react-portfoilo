import React from 'react'
import './qualification.css'
import intern from '../../assets/logo/logo_vby.png'
import sbac from '../../assets/logo/SBAC.png'
import kmutnb from '../../assets/logo/KMUTNB.png'
import namai from '../../assets/logo/namai.jpg'

const Qualification = () => {
    const [toggleState, setToggleState] = React.useState(1);
    const toggletab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title" style={{ textAlign: "center", margin: "0 auto" }}>Qualification</h2>
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
                                <img src={kmutnb} alt="kmutnb" className="qualification__img" style={{ width: "40px", height: "40px" }} />
                                <h3 className="qualification__title">Bachelor of Industrial Technology<br />(B.Ind .Tech.)</h3>
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
                                <img src={sbac} alt="sbac" className="qualification__img" style={{ width: "35px", height: "35px" }} />
                                <h3 className="qualification__title" style={{ fontFamily: 'poppins, "Noto Sans Thai", sans-serif' }}>High Vocational Certificate of IT</h3>
                                <span className="qualification__subtitle">SIAM BUSINESS ADMINISTRATION NONTHABURI TECHNOLOGICAL COLLEGE (SBAC)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <img src={sbac} alt="sbac" className="qualification__img" style={{ width: "35px", height: "35px" }} />
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
                                <img src={namai} alt="namai" className="qualification__img" style={{ width: "40px", height: "40px" }} />
                                <h3 className="qualification__title" style={{ fontFamily: 'poppins, "Noto Sans Thai", sans-serif' }}>Secondary School</h3>
                                <span className="qualification__subtitle">Wat Na Mai School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2015 - 2017
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data d-flex gap-4">
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <img
                                        src={intern}
                                        alt="intern"
                                        className="qualification__img rounded-circle"
                                        style={{ width: "30px", height: "30px" }}
                                    />
                                    <h3 className="qualification__title mb-0 fw-semibold">
                                        V Beyond Developments Public Co., Ltd.
                                    </h3>
                                </div>

                                {/* ตำแหน่งงาน */}
                                <span className="qualification__subtitle d-block text-muted small mt-1">
                                    IT Department intern, Frontend Developer position
                                </span>

                                {/* ช่วงเวลา */}
                                <div className="qualification__calendar d-flex align-items-center gap-2 text-muted small mt-2">
                                    <i className="uil uil-calendar-alt"></i>
                                    <span>Apr. 2025 – Aug. 2025</span>
                                </div>
                            </div>

                            {/* ไทม์ไลน์ด้านข้าง */}
                            <div className="d-flex flex-column align-items-center">
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