import React from "react"
import "./index.css"

class Work extends React.Component {
  render() {
    return (
      <div className="work-container">
        <div className="work-headline">
          <h2>Work</h2>
        </div>
        <hr />
        <div className="work-boxes">
          <div className="work-box-left">
            <div className="work-box-1" />
            <div className="work-box-2" />
            <div className="work-box-3" />
          </div>
          <div className="work-box-4" />
        </div>
      </div>
    )
  }
}

export default Work
