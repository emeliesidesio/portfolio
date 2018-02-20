import React from "react"
import projects from "data/projects"
import Navigation from "components/navigation"
import Footer from "components/footer"
import "./index.css"

export default class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    const project = projects.find(p => (p.id === this.props.match.params.id))
    this.setProject(project)
  }

  setProject = project => {
    this.setState({
      project
    })
  }

  render() {
    return (
      <div className="ProjectPage">
        <Navigation />
        <div className="project-container">
          <div className="project-copy">
            <h2>{this.state.project.name}</h2>
            <p className="tagline">{this.state.project.language}</p><br />
            <p>{this.state.project.description}</p><br />
            <a href={this.state.project.demo} target="_blank" rel="noreferrer noopener"><p className="project-link">Live demo</p></a>
            <a href={this.state.project.link} target="_blank" rel="noreferrer noopener"><p className="project-link">Project on Github</p></a>
          </div>
          <div className="project-img">
            <img src={this.state.project.image} className="project-detail-img" alt="" />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
