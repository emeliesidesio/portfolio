import React from "react"
import Web from "components/web"
import Sparetime from "components/sparetime"
import "./index.css"

class Home extends React.Component {
  render() {
    return (
      <div className="HomePage">

        <div className="hero-container">
          <h2 className="hero-title">Emelie Sidesiö</h2>
          <hr className="hero-line" />
          <p className="hero-copy">Web Developer & Graphic Designer</p>
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

        <Web />
        <Sparetime />

        <div className="info-container" id="contact">
          <div className="info-header">
            <h2>Get in touch</h2>
          </div>
          <hr />
          <div className="info-copy">
            <p>Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla. Lorem ipsum bla bla bla.</p>
          </div>
          <a className="back-link" href="#top">Back to Top</a>
        </div>

      </div>
    )
  }
}

export default Home
