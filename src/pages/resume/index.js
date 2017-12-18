import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Resume extends React.Component {
  render() {
    return (
      <div className="ResumePage">

        <ul className="resume-grid">
          <li className="resume-top">
            <img src="/download.png" alt="" className="resume-image" />
          </li>
          <li>
            <h2>Education</h2>
            <p className="header-second">Technigo / Oct 2017 - Feb 2018</p>
            <p>Digital Artworker - Producing images for multiple channels such as website and social media.</p><br />
            <p className="header-second">Hyper Island / 2012 - 2013</p>
            <p>Motion Graphics. En specialutbildning inom design och animation.</p><br />
            <p className="header-second">Stockholms University / 2010 - 2012</p>
            <p>Grafiska institutet. En vidareutbildning inom grafisk design och projektledning.</p>
          </li>
          <li>
            <h2>Work Experience</h2>
            <p className="header-second">H&M / July 2016 - Ongoing</p>
            <p>Digital Artworker - Producing images for multiple channels such as website and social media.</p><br />
            <p className="header-second">Ivyrevel / March 2016 - July 2016</p>
            <p>Graphic Designer - Graphic design and artwork production.</p><br />
            <p className="header-second">ADCN (Amsterdam)/ Sep 2015 - March 2016</p>
            <p>Creative Producer - Managing events.</p><br />
            <p className="header-second">Fjällräven / July 2013 - Sep 2015</p>
            <p>PIM Manager - Production management, artwork and banner production.</p>
          </li>
          <li>
            <h2>Freelance</h2>
            <p className="header-second">Tierra / 2016 - Ongoing</p>
            <p>Artworker for digital and print productions.</p><br />
            <p className="header-second">Graphiare / 2014 - 2015</p>
            <p>Responsible for development of graphic profile, website and print production.</p>
          </li>
        </ul>

        <div className="return">
          <p><Link to="/">Back to Home</Link></p>
        </div>

      </div>
    )
  }
}

export default Resume
