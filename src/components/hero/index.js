import React from "react"
import "./index.css"

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-left" />
        <div className="hero-middle">
          <h1>Hello world.</h1>
        </div>
        <div className="hero-right">
          <h2>Emelie Sidesiö</h2>
          <p>Web Developer & Graphic Designer</p>
        </div>
      </div>
    )
  }
}

export default Hero
