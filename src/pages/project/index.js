import React from "react"
import projects from "data/projects"
import Navigation from "components/navigation"
import Spacer from "components/spacer"
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
      <div>
        <Navigation />
        <div className="project-container">
          <div className="project-copy">
            <div className="title-secondary">{this.state.project.name}</div>
            <div className="tagline">{this.state.project.language}</div>
            <Spacer />
            <div className="paragraph">{this.state.project.description}</div>
            <Spacer />
            <div>
              <a className="project-link" href={this.state.project.demo} target="_blank" rel="noreferrer noopener">Live demo</a>
            </div>
            <div>
              <a className="project-link" href={this.state.project.link} target="_blank" rel="noreferrer noopener">Project on Github</a>
            </div>
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
