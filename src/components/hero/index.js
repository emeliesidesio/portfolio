import React from "react"
import "./index.css"

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">

        <div className="hero-left">

          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

          <label className="hamburger" htmlFor="hamburger">
            <div className="bar bar1" />
            <div className="bar bar2" />
            <div className="bar bar3" />
          </label>

          <div className="menu">
            <ul>
              <li><a href="#top">Web Development</a></li>
              <li><a href="#top">Motion Graphics</a></li>
              <li><a href="#top">Illustrations</a></li>
            </ul>
          </div>
        </div>

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
