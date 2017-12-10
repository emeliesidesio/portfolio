import React from "react"
import "./index.css"

class Web extends React.Component {
  render() {
    return (
      <div className="web-container">

        <div className="web-headline">
          <h2>Web Development</h2>
        </div>
        <hr />

        <div className="web-boxes">

          <div className="web-box-left">

            <div className="web-box-1" />
            <div className="web-box-2">
              <img src="/react-design-brief-1.png" alt="" className="react-image" />
            </div>
            <div className="web-box-3">
              <img src="/weather-api.png" alt="" className="weather-image" />
            </div>
          </div>

          <div className="web-box-4">
            <img src="/group-calendar.png" alt="" className="calendar-image" />
          </div>

        </div>
      </div>
    )
  }
}

export default Web
