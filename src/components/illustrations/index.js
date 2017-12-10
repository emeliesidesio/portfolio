import React from "react"
import "./index.css"

class Illustrations extends React.Component {
  render() {
    return (
      <div className="illustrations-container">

        <div className="illustrations-headline">
          <h2>Illustrations</h2>
        </div>
        <hr />

        <div className="illustrations-boxes">
          <img src="donuts-01.png" alt="" className="illustration-img" />
          <img src="dreamcatcher-01.png" alt="" className="illustration-img" />
          <img src="kanken.png" alt="" className="illustration-img" />
          <img src="bottles-01.png" alt="" className="illustration-img" />
          <img src="camera.png" alt="" className="illustration-img" />
          <img src="ferries_wheel-01.png" alt="" className="illustration-img" />
        </div>
      </div>
    )
  }
}

export default Illustrations
