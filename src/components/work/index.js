import React from "react"
import "./index.css"

class Work extends React.Component {
  render() {
    return (
      <div className="work-container" id="work">

        <div className="work-headline">
          <h2>Web Development</h2>
        </div>
        <hr />

        <div className="work-boxes">

          <div className="work-boxes-left">
            <div className="box-project-1">
              <img src="/react-design.png" alt="" className="react-image" />
            </div>
            <div className="box-project-2">
              <img src="/clock.png" alt="" className="clock-image" />
            </div>
          </div>

          <div className="work-boxes-middle">
            <img src="/group-calendar.png" alt="" className="calendar-image" />
          </div>

          <div className="work-boxes-right">
            <div className="box-project-3">
              <img src="/forms-image-2.png" alt="" className="forms-image" />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Work
