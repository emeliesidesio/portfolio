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

          <div className="work-box-left">
            <div className="react-box">
              <img src="/react-design.png" alt="" className="react-image" />
            </div>
            <div className="weather-box">
              <img src="/clock.png" alt="" className="weather-image" />
            </div>
          </div>

          <div className="work-box-middle">
            <img src="/group-calendar.png" alt="" className="calendar-image" />
          </div>

          <div className="work-box-right">
            <div className="forms-box">
              <img src="/forms-2.png" alt="" className="forms-image" />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Work
