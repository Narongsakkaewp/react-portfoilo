import React from 'react'
import { ReactComponent as PowerBiIcon } from "../../assets/icons/power-bi-icon.svg";
import { ReactComponent as MatlabIcon } from "../../assets/icons/matlab-icon.svg";
import { ReactComponent as FigmaIcon } from "../../assets/icons/figma-icon.svg";
import { ReactComponent as AzureIcon } from "../../assets/icons/azure-icon.svg";
import { ReactComponent as VSCodeIcon } from "../../assets/icons/vs-code-icon.svg";
import { ReactComponent as AndroidStudioIcon } from "../../assets/icons/android-studio-icon.svg";
import { ReactComponent as CanvaIcon } from "../../assets/icons/canva-icon.svg";
import { ReactComponent as OfficeIcon } from "../../assets/icons/of-icon.svg";
import { ReactComponent as ChatgptIcon } from "../../assets/icons/chatgpt-icon.svg";


const Tools = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <AndroidStudioIcon style={{ width: "40px", height: "40px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">Android Studio</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <VSCodeIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">VS Code</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="devicon-linux-plain colored"></i>
                        <div>
                            <h3 className="skills__name">Linux</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <OfficeIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">Microsoft Office</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <CanvaIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">Canva</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <AzureIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">Azure</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <MatlabIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">Matlab</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <FigmaIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <PowerBiIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">Power BI</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <ChatgptIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                        <div>
                            <h3 className="skills__name">ChatGPT</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Tools