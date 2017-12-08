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
              <li><a className="nav-link" href="">Web Development</a></li>
              <li><a className="nav-link" href="">Motion Graphics</a></li>
              <li><a className="nav-link" href="">Illustrations</a></li>
              <li><Link to="/resume" className="nav-link">Resume</Link></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
              <li><Link to="/" className="nav-link">Home</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
