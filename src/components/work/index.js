import React from "react"
import "./index.css"

class Work extends React.Component {
  render() {
    return (

      <div className="work-container" id="work">

        <ul className="work-grid">
          <li className="work-wide">
            <h2>Web Development</h2>
            <hr />
            <p className="work-copy">Work I've made during my 12 week bootcamp at Technigo.</p>
          </li>
          <li className="box work-tall"><img src="/group-calendar.png" className="image-detail" alt="" /></li>
          <li className="box"><img src="/react-design.png" className="image-detail" alt="" /></li>
          <li className="box work-tall"><img src="/tictail-store.png" className="image-detail" alt="" /></li>
          <li className="box"><img src="/forms-image-2.png" className="image-detail" alt="" /></li>
        </ul>
      </div>
    )
  }
}

export default Work
