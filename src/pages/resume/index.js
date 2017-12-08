import React from "react"
import "./index.css"

class Resume extends React.Component {
  render() {
    return (
      <div className="ResumePage">
        <div className="resume-header">
          <img src="/catgif.gif" alt="" className="resume-image" />
          <h2>Emelie Sidesiö</h2>
        </div>
        <div className="resume-container">
          <div className="resume-left">
            <h2>Education</h2>
          </div>
          <div className="resume-right">
            <h2>Work Experience</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
