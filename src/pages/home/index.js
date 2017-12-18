import React from "react"
import Work from "components/work"
import Sparetime from "components/sparetime"
import Navigation from "components/navigation"
import "./index.css"

class Home extends React.Component {
  render() {
    return (
      <div className="HomePage">

        <div className="hero-container">
          <Navigation />
        </div>

        <div className="about-container">
          <div className="hero-copy-container">
            <h2>This is me</h2>
            <hr className="line" />
            <p>My name is Emelie and I work as a graphic designer. It's important for me to constantly develop and to learn new things. Therefore I recently applied for a 12 week bootcamp in web development! Now I'm learning new things every day and getting new skills to combine with my previous ones.</p>
          </div>
        </div>

        <Work />
        <Sparetime />

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
