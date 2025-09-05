import React from 'react'
import {ReactComponent as VueIcon} from "../../assets/icons/vue-icon.svg";
import {ReactComponent as ViteIcon} from "../../assets/icons/vite-icon.svg";
import {ReactComponent as NpmIcon} from "../../assets/icons/npm-icon.svg";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="devicon-html5-plain colored"></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="devicon-css3-plain colored"></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <VueIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">Vue</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="devicon-javascript-plain colored"></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <ViteIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">Vite</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>


                <div className="skills__group">
                    <div className="skills__data">
                        <i className="devicon-react-original colored"></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="devicon-bootstrap-plain colored"></i>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="devicon-tailwindcss-plain colored"></i>
                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="devicon-git-plain colored"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <NpmIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">NPM</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Frontend