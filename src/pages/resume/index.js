import React from "react"
import Navigation from "components/navigation"
import Footer from "components/footer"
import profile from "assets/download.png"
import "./index.css"

class Resume extends React.Component {
  render() {
    return (
      <div className="ResumePage">
        <Navigation />
        <ul className="resume-grid">
          <li className="a">
            <img src={profile} alt="" className="resume-image" />
            <p className="tagline">
              Emelie Sidesiö<br />
              1988-01-18<br />
              esidesio@gmail.com
            </p>
          </li>
          <li className="b">
            <h2>Experience</h2><br />
            <p className="header-second">H&M / July 2016 - Ongoing</p>
            <p>Digital Artworker - Producing images for multiple channels such as website and social media.</p><br />
            <p className="header-second">Ivyrevel / March 2016 - July 2016</p>
            <p>Graphic Designer - Graphic design and artwork production.</p><br />
            <p className="header-second">ADCN (Amsterdam) / Sep 2015 - March 2016</p>
            <p>Creative Producer - Managing events.</p><br />
            <p className="header-second">Fjällräven / July 2013 - Sep 2015</p>
            <p>PIM Manager - Production management, artwork and banner production.</p><br />
            <h2>Education</h2><br />
            <p className="header-second">Technigo / Oct 2017 - Feb 2018</p>
            <p>A 12 week bootcamp in web development.</p><br />
            <p className="header-second">Hyper Island / 2012 - 2013</p>
            <p>Motion Graphics. An eductation specializing in animation.</p><br />
            <p className="header-second">Stockholms University / 2010 - 2012</p>
            <p>Grafiska institutet. An eductation within graphic design and project management.</p><br />
            <h2>Freelance</h2><br />
            <p className="header-second">Tierra / 2016 - 2017</p>
            <p>Artworker for digital and print productions.</p><br />
            <p className="header-second">Graphiare / 2014 - 2015</p>
            <p>Responsible for development of graphic profile, website and print production.</p>
          </li>
        </ul>
        <Footer />
      </div>
    )
  }
}

export default Resume
