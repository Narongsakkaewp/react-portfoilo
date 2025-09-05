import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="devicon-php-plain colored"></i>
                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="devicon-nodejs-plain colored"></i>
                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="devicon-mysql-plain colored"></i>
                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend