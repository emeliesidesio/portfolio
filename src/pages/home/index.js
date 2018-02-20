import React from "react"
import Navigation from "components/navigation"
import LottieControl from "animations/lottiecontrol"
import ProjectView from "components/projectview"
import projects from "data/projects"
import Footer from "components/footer"

import cat from "assets/cat_walk_cycle.gif"
import fries from "assets/fries-animation.gif"
import camping from "assets/camping.gif"
import donut from "assets/donuts-01.png"
import bottles from "assets/bottles-01.png"
import dreamcatcher from "assets/dreamcatcher-01.png"
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
          </div>
        </div>

        <div className="work-container">
          <ul className="work-grid">
            <li className="work-wide">
              <h2>Web development</h2>
            </li>
            {projects.map(project => (
              <ProjectView
                key={project.id}
                url={project.id}
                name={project.name}
                language={project.language}
                image={project.image}
                link={project.link}
                demo={project.demo}
                description={project.description} />
            ))}
          </ul>
        </div>

        <div className="work-container">

          <ul className="work-grid">
            <li className="work-wide">
              <h2>Sparetime fun</h2>
            </li>
            <li className="box" style={{ backgroundImage: `url(${cat})` }} />
            <li className="box" style={{ backgroundImage: `url(${dreamcatcher})` }} />
            <li className="box" style={{ backgroundImage: `url(${fries})` }} />
            <li className="box" style={{ backgroundImage: `url(${donut})` }} />
            <li className="box" style={{ backgroundImage: `url(${camping})` }} />
            <li className="box" style={{ backgroundImage: `url(${bottles})` }} />
          </ul>
        </div>

        <div className="about-container" id="contact">
          <div className="inner-margin">
            <h2>About me</h2>
            <p>
              <br />My name is Emelie and I&lsquo;m a web developer and graphic designer
              located in Stockholm. I&lsquo;m a Hyper Island alumni and up until recently
              I worked as a digital artworker at H&M marketing department. <br />
              <br />I have a passion for design and technology and right now
              I&lsquo;m participating in Technigo’s web development bootcamp.<br />
              <br />I ❤️ typography, yoga and cat gifs.
            </p>
            <h2><br />Get in touch</h2>
            <p><br />esidesio@gmail.com</p>
          </div>
          <Footer />
        </div>

      </div>
    )
  }
}

export default Home
