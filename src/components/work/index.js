import React from "react"
import "./index.css"

class Work extends React.Component {
  render() {
    return (
      <div className="work-container">

        <div className="work-headline">
          <h2>Web Development</h2>
        </div>
        <hr />

        <div className="work-boxes">

          <div className="work-box-left">

            <div className="work-box-1" />
            <div className="work-box-2">
              <img src="/react-design-brief-1.png" alt="" className="react-image" />
            </div>
            <div className="work-box-3">
              <img src="/weather-api.png" alt="" className="weather-image" />
              <h3>{this.props.title}</h3>
              <p>{this.props.objective}</p>
              <p>{this.props.keyword}</p>
            </div>
          </div>

          <div className="work-box-4">
            <img src="/group-calendar.png" alt="" className="calendar-image" />
            <h3>{this.props.title}</h3>
            <p>{this.props.objective}</p>
            <p>{this.props.keyword}</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Work
