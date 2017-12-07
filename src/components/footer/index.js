import React from "react"
import "./index.css"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="logo-container">
          <a href="mailto:esidesio@gmail.com"><img src="/telegram-logo.png" alt="E-mail me" /></a>
          <a href="https://dribbble.com/emeliesidesio" target="_blank"><img src="/dribbble-logo.png" alt="To my dribbble account" /></a>
        </div>
      </div>
    )
  }
}

export default Footer
