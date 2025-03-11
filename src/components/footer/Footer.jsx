import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">kaewprathum</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/Narongsakkaewp" className="footer__social-link" rel="noopener noreferrer" target="_blank">
                    <i class='bx bxl-github' ></i>
                </a>

                <a href="https://facebook.com/narongsak.kaewprathum" className="footer__social-link" rel="noopener noreferrer" target="_blank">
                    <i class='bx bxl-facebook' ></i>
                </a>

                <a href="https://api.whatsapp.com/send?phone=66627802404&text=Hello, more information!" className="footer__social-link" rel="noopener noreferrer" target="_blank">
                    <i class='bx bxl-whatsapp' ></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Narongsak Kaew. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer