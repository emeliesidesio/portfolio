import React from "react"
import "./index.css"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="logo-container">
          <a href="mailto:esidesio@gmail.com"><img src="/telegram-logo.png" alt="" className="social-image" /></a>
          <a href="https://dribbble.com/emeliesidesio"><img src="/dribbble-logo.png" alt="" className="social-image" /></a>
        </div>
      </div>
    )
  }
}

export default Footer
