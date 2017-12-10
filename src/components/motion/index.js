import React from "react"
import "./index.css"

class Motion extends React.Component {
  render() {
    return (
      <div className="motion-container">

        <h2 className="motion-headline">Motion Graphics</h2>
        <hr />

        <div className="motion-boxes">

          <div className="motion-box-upper">
            <img src="cat_walk_cycle.gif" alt="" className="motion-image" />
            <img src="camping.gif" alt="" className="motion-image" />
            <img src="creditcard.gif" alt="" className="motion-image" />
          </div>

          <div className="motion-box-lower">
            <iframe src="https://player.vimeo.com/video/50835529?title=0&byline=0&portrait=0" title="Exploring Animation" width="990" height="480" frameBorder="0" />
          </div>

        </div>
      </div>
    )
  }
}

export default Motion
