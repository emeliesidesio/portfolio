import React from "react"
import Github from "assets/github-logo.png"
import Dribbble from "assets/dribbble-logo.png"
import Linkedin from "assets/linkedin-logo.png"
import "./index.css"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="logo-container">
          <a href="https://github.com/emeliesidesio" target="_blank" rel="noreferrer noopener"><img src={Github} alt="" className="social-image" /></a>
          <a href="https://dribbble.com/emeliesidesio" target="_blank" rel="noreferrer noopener"><img src={Dribbble} alt="" className="social-image" /></a>
          <a href="https://www.linkedin.com/in/emelie-sidesi%C3%B6-51a68941/" target="_blank" rel="noreferrer noopener"><img src={Linkedin} alt="" className="social-image" /></a>
        </div>
      </footer>
    )
  }
}

export default Footer
