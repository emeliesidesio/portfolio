import React from "react"
import Spacer from "components/spacer"
import Github from "assets/github-logo.png"
import Dribbble from "assets/dribbble-logo.png"
import Linkedin from "assets/linkedin-logo.png"
import "./index.css"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container" id="contact">
        <div className="text-container">
          <div className="title-secondary">About me</div>
          <Spacer />
          <div className="paragraph">My name is Emelie and I&lsquo;m a web developer and graphic designer
            situated in Stockholm. I&lsquo;m a Hyper Island alumni and I&lsquo;m currently working
            as a frontend developer at Mojang. On this page I&lsquo;m showcasing some personal
            projects and school assignments.
          </div>
          <Spacer />
          <div className="paragraph">
            I <span role="img" aria-label="Heart">❤️</span>animations, yoga and cat gifs.
          </div>
          <Spacer />
          <div className="title-secondary">Get in touch</div>
          <Spacer />
          <div className="paragraph">esidesio@gmail.com</div>
        </div>
        <Spacer />
        <Spacer />
        <div className="logo-container">
          <a href="https://github.com/emeliesidesio" target="_blank" rel="noreferrer noopener"><img src={Github} alt="" className="social-image" /></a>
          <a href="https://dribbble.com/emeliesidesio" target="_blank" rel="noreferrer noopener"><img src={Dribbble} alt="" className="social-image" /></a>
          <a href="https://www.linkedin.com/in/emelie-sidesi%C3%B6-51a68941/" target="_blank" rel="noreferrer noopener"><img src={Linkedin} alt="" className="social-image" /></a>
        </div>
      </div>
    )
  }
}

export default Footer
