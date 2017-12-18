import React from "react"
import "./index.css"

class Sparetime extends React.Component {
  render() {
    return (
      <div className="sparetime-container" id="sparetime">

        <div className="sparetime-headline">
          <h2>Sparetime Projects</h2>
        </div>
        <hr />
        <p className="sparetime-copy">Illustrations and animations I've made in my sparetime, just for the fun of it.</p>

        <div className="sparetime-boxes">
          <img src="cat_walk_cycle.gif" alt="" className="sparetime-img" />
          <img src="donuts-01.png" alt="" className="sparetime-img" />
          <img src="fries-animation.gif" alt="" className="sparetime-img" />
          <img src="biggest-fan-01.png" alt="" className="sparetime-img" />
          <img src="dreamcatcher-01.png" alt="" className="sparetime-img" />
          <img src="kanken.png" alt="" className="sparetime-img" />
          <img src="bottles-01.png" alt="" className="sparetime-img" />
          <img src="camera.png" alt="" className="sparetime-img" />
          <img src="camping.gif" alt="" className="sparetime-img" />
        </div>

        <div className="sparetime-lower">
          <iframe src="https://player.vimeo.com/video/50835529?title=0&byline=0&portrait=0" title="Exploring Animation" frameBorder="0" />
        </div>
      </div>
    )
  }
}

export default Sparetime
