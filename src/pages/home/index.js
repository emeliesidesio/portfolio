import React from "react"
import Work from "components/work"
import "./index.css"

class Home extends React.Component {
  render() {
    return (
      <div className="HomePage">

        <div className="hero-container">
          <div className="hero-left" id="hero-bg" />
          <div className="hero-middle">
            <h1>Hello world.</h1>
          </div>
          <div className="hero-right">
            <h2>Emelie Sidesiö</h2>
            <p>Web Developer & Graphic Designer</p>
          </div>
        </div>

        <div className="info-container">
          <div className="info-header">
            <h2>What I do</h2>
          </div>
          <hr />
          <div className="info-copy">
            <p>Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla.</p>
          </div>
        </div>

        <Work />

        <div className="info-container" id="contact">
          <div className="info-header">
            <h2>Get in touch</h2>
          </div>
          <hr />
          <div className="info-copy">
            <p>Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Home
