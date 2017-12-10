import React from "react"
import Work from "components/work"
import Sparetime from "components/sparetime"
import "./index.css"

class Home extends React.Component {
  render() {
    return (
      <div className="HomePage">

        <div className="hero-container" id="hero-img">
          <div className="hero-copy-container">
            <h2 className="hero-title">Emelie Sidesiö</h2>
            <p className="hero-copy">Web Developer & Graphic Designer</p>
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
        <Sparetime />

        <div className="info-container" id="contact">
          <div className="info-header">
            <h2>Get in touch</h2>
          </div>
          <hr />
          <div className="info-copy">
            <p>Contact me for collaborations or work opportunities! <br />esidesio@gmail.com / 073 030 85 81</p>
          </div>
          <a className="back-link" href="#top">Back to Top</a>
        </div>

      </div>
    )
  }
}

export default Home
