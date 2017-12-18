import React from "react"
import cat from "assets/cat_walk_cycle.gif"
import fries from "assets/fries-animation.gif"
import donut from "assets/donuts-01.png"
import fan from "assets/biggest-fan-01.png"
import kanken from "assets/kanken.png"
import bottles from "assets/bottles-01.png"
import camera from "assets/camera.png"
import camping from "assets/camping.gif"
import dreamcatcher from "assets/dreamcatcher-01.png"
import "./index.css"

class Sparetime extends React.Component {
  render() {
    return (
      <div className="sparetime-container" id="sparetime">

        <ul className="sparetime-grid">
          <li className="sparetime-wide">
            <h2>Sparetime Projects</h2>
            <hr />
            <p className="sparetime-copy">Illustrations and animations I've made in my sparetime, just for the fun of it.</p>
          </li>
          <li className="cat" style={{ backgroundImage: `url(${cat})` }} />
          <li className="donut" style={{ backgroundImage: `url(${donut})` }} />
          <li className="fries" style={{ backgroundImage: `url(${fries})` }} />
          <li className="fan" style={{ backgroundImage: `url(${fan})` }} />
          <li className="dreamcatcher" style={{ backgroundImage: `url(${dreamcatcher})` }} />
          <li className="kanken" style={{ backgroundImage: `url(${kanken})` }} />
          <li className="bottles" style={{ backgroundImage: `url(${bottles})` }} />
          <li className="camera" style={{ backgroundImage: `url(${camera})` }} />
          <li className="camping" style={{ backgroundImage: `url(${camping})` }} />
        </ul>
        <div className="sparetime-lower">
          <iframe src="https://player.vimeo.com/video/50835529?title=0&byline=0&portrait=0" title="Exploring Animation" frameBorder="0" />
        </div>
      </div>
    )
  }
}

export default Sparetime
