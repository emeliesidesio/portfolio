import React from "react"
import "./index.css"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="logo-container">
          <a href="mailto:esidesio@gmail.com"><img src="/contact.png" alt="" className="social-image" /></a>
          <a href="https://dribbble.com/emeliesidesio"><img src="/dribbble-social-outlined-symbol.png" alt="" className="social-image" /></a>
          <a href="https://www.linkedin.com/in/emelie-sidesi%C3%B6-51a68941/"><img src="/linkedin-social-outline-logotype.png" alt="" className="social-image" /></a>
        </div>
      </div>
    )
  }
}

export default Footer
