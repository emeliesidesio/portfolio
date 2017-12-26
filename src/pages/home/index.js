import React from "react"
import Navigation from "components/navigation"
import LottieControl from "animations/lottiecontrol"
import ProjectView from "components/projectview"
import projects from "data/projects"

import Github from "assets/github-logo.png"
import Dribbble from "assets/dribbble-logo.png"
import Linkedin from "assets/linkedin-logo.png"
import cat from "assets/cat_walk_cycle.gif"
import fries from "assets/fries-animation.gif"
import camping from "assets/camping.gif"
import donut from "assets/donuts-01.png"
import bottles from "assets/bottles-01.png"
import dreamcatcher from "assets/dreamcatcher-01.png"
import calendar from "assets/advent-cal-img.png"
import grid from "assets/css-grid.png"
import forms from "assets/forms.png"
import clock from "assets/clock-img.png"
import tictail from "assets/tictail-img.png"
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

          {/* {projects.map(project => (
            <ProjectView
              key={project.id}
              url={project.id}
              name={project.name}
              language={project.language}
              image={project.image}
              description={project.description} />
          ))} */}

          <ul className="work-grid">
            <li className="work-wide">
              <h2 id="work">Web Development</h2>
            </li>
            <li className="workbox"><img className="calendar-img" src={calendar} alt="" /></li>
            <li className="workbox"><img className="grid-img" src={grid} alt="" /></li>
            <li className="workbox"><img className="form-img" src={forms} alt="" /></li>
            <li className="workbox"><img className="clock-img" src={clock} alt="" /></li>
            <li className="workbox"><img className="tictail-img" src={tictail} alt="" /></li>
            <li className="workbox">6</li>
          </ul>
        </div>

        <div className="work-container" id="sparetime">

          <ul className="work-grid">
            <li className="work-wide">
              <h2 id="sparetime">Sparetime fun</h2>
            </li>
            <li className="box" style={{ backgroundImage: `url(${cat})` }} />
            <li className="box" style={{ backgroundImage: `url(${dreamcatcher})` }} />
            <li className="box" style={{ backgroundImage: `url(${fries})` }} />
            <li className="box" style={{ backgroundImage: `url(${donut})` }} />
            <li className="box" style={{ backgroundImage: `url(${camping})` }} />
            <li className="box" style={{ backgroundImage: `url(${bottles})` }} />
          </ul>
        </div>

        <div className="footer-container" id="contact">
          <div className="inner-margin">
            <h2>About me</h2>
            <p><br />My name is Emelie and I'm a graphic designer located in Stockholm. I'm a Hyper Island alumni and up until recently I worked as a digital artworker at the marketing department of H&M. <br /><br />Previous fall I decided that I wanted to develop further and applied for a three month bootcamp in web development at the pop-up school Technigo. Now I'm learning new skills everyday and having such a fun time!</p>
            <h2><br />Get in touch</h2>
            <p><br />esidesio@gmail.com</p>
          </div>
          <div className="logo-container">
            <a href="https://github.com/emeliesidesio"><img src={Github} alt="" className="social-image" /></a>
            <a href="https://dribbble.com/emeliesidesio"><img src={Dribbble} alt="" className="social-image" /></a>
            <a href="https://www.linkedin.com/in/emelie-sidesi%C3%B6-51a68941/"><img src={Linkedin} alt="" className="social-image" /></a>
          </div>
        </div>

      </div>
    )
  }
}

export default Home
