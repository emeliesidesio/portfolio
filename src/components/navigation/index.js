import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

        <label className="hamburger" htmlFor="hamburger">
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </label>

        <div className="menu">
          <div><Link className="nav-link" to="/">Home</Link></div>
          <div><a href="/#contact" className="nav-link">About / Contact</a></div>
        </div>

      </div>
    )
  }
}

export default Navigation
