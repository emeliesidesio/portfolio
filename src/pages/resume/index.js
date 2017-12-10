import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Resume extends React.Component {
  render() {
    return (
      <div className="ResumePage">

        <div className="resume-header">
          <img src="/download.png" alt="" className="resume-image" />
          <h2 className="resume-title">Emelie Sidesiö</h2>
          <p>1988-01-18</p>
        </div>
        <hr className="resume-line" />

        <div className="resume-container">

          <div className="resume-left">
            <div className="content">
              <h2 className="resume-title">Education</h2>
              <p className="resume-title-content">Technigo / Oct 2017 - Feb 2018</p>
              <p>Digital Artworker - Producing images for multiple channels such as website and social media.</p>
              <p className="resume-title-content">Hyper Island / 2012 - 2013</p>
              <p>Motion Graphics. En specialutbildning inom design och animation.</p>
              <p className="resume-title-content">Stockholms University / 2010 - 2012</p>
              <p>Grafiska institutet. En vidareutbildning inom grafisk design och projektledning.</p>
            </div>
          </div>

          <div className="resume-middle">
            <div className="content">
              <h2 className="resume-title">Work Experience</h2>
              <p className="resume-title-content">H&M / July 2016 - Ongoing</p>
              <p>Digital Artworker - Producing images for multiple channels such as website and social media.</p>
              <p className="resume-title-content">Ivyrevel / March 2016 - July 2016</p>
              <p>Graphic Designer - Graphic design and artwork production.</p>
              <p className="resume-title-content">ADCN (Amsterdam)/ Sep 2015 - March 2016</p>
              <p>Creative Producer - Managing events.</p>
              <p className="resume-title-content">Fjällräven / July 2013 - Sep 2015</p>
              <p>PIM Manager - Production management, artwork and banner production.</p>
            </div>
          </div>

          <div className="resume-right">
            <div className="content">
              <h2 className="resume-title">Freelance</h2>
              <p className="resume-title-content">Tierra / 2016 - Ongoing</p>
              <p>Artworker for digital and print productions.</p>
              <p className="resume-title-content">Graphiare / 2014 - 2015</p>
              <p>Responsible for development of graphic profile, website and print production.</p>
            </div>
          </div>
        </div>

        <div className="return">
          <p><Link to="/" className="nav-link">Back to Home</Link></p>
        </div>

      </div>
    )
  }
}

export default Resume
