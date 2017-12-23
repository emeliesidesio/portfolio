import React from "react"
// import Work from "components/work"
// import Sparetime from "components/sparetime"
import Navigation from "components/navigation"
import LottieControl from "animations/lottiecontrol"
import "./index.css"

class Home extends React.Component {
  render() {
    return (
      <div className="HomePage">

        <div className="hero-container">
          <Navigation />
          <div className="copy-container">
            <LottieControl />
            <h1>Emelie Sidesiö</h1>
            <p className="tagline">Web developer & Graphic designer.</p>
            <div id="diamond"></div>
          </div>
        </div>

        <div className="work-container" id="work">

          <ul className="work-grid">
            <li className="work-wide">
              <h2>Web Development</h2>
            </li>
            <li className="box">1</li>
            <li className="box">2</li>
            <li className="box">3</li>
            <li className="box">4</li>
            <li className="box">5</li>
            <li className="box">6</li>
          </ul>
        </div>

        <div className="work-container" id="sparetime">

          <ul className="work-grid">
            <li className="work-wide">
              <h2>Sparetime projects</h2>
            </li>
            <li className="box">1</li>
            <li className="box">2</li>
            <li className="box">3</li>
            <li className="box">4</li>
            <li className="box">5</li>
            <li className="box">6</li>
          </ul>
        </div>

        {/* <Work /> */}
        {/* <Sparetime /> */}

        <div className="info-container" id="contact">
          <h2>Get in touch</h2>
          <hr />
          <p>Contact me for collaborations or work opportunities! <br />esidesio@gmail.com / 073 030 85 81</p>
          <a href="#top"><img className="arrow" src="/up-arrow.png" alt="" /></a>
        </div>

      </div>
    )
  }
}

export default Home
