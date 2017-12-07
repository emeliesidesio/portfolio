import React from "react"
import "./index.css"

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-header">
          <h2>What I do</h2>
        </div>
        <hr />
        <div className="about-copy">
          <p>Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla.</p>
        </div>
      </div>
    )
  }
}

export default About
