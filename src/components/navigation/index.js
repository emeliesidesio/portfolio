import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

        <label className="hamburger" htmlFor="hamburger">
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </label>

        <div className="menu">
          <div className="nav-menu">
            <ul className="nav-list">
              <li><Link className="nav-link" to="#work">Web Development</Link></li>
              <li><Link className="nav-link" to="#sparetime">Sparetime Projects</Link></li>
              <li><Link className="nav-link" to="/resume">Resume</Link></li>
              <li><Link className="nav-link" to="#contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
