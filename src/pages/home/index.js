import React from "react"
import Navigation from "components/navigation"
import LottieControl from "animations/lottiecontrol"
import ProjectView from "components/projectview"
import projects from "data/projects"
import Footer from "components/footer"
import Spacer from "components/spacer"

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
      <div>

        <div className="hero-container">
          <Navigation />
          <LottieControl />
          <div className="title">Emelie Sidesiö</div>
          <Spacer />
          <div className="tagline">Web developer & Graphic designer</div>
        </div>

        <div className="work-container">
          <div className="work-grid">
            <div className="work-wide">
              <div className="title-secondary">Web development</div>
            </div>
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
          </div>
        </div>

        <div className="work-container">

          <div className="work-grid">
            <div className="work-wide">
              <div className="title-secondary">Sparetime fun</div>
            </div>
            <div className="box" style={{ backgroundImage: `url(${cat})` }} />
            <div className="box" style={{ backgroundImage: `url(${dreamcatcher})` }} />
            <div className="box" style={{ backgroundImage: `url(${fries})` }} />
            <div className="box" style={{ backgroundImage: `url(${donut})` }} />
            <div className="box" style={{ backgroundImage: `url(${camping})` }} />
            <div className="box" style={{ backgroundImage: `url(${bottles})` }} />
          </div>
        </div>

        <Footer />

      </div>
    )
  }
}

export default Home
