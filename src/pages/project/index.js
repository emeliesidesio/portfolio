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

  setProject = (project) => {
    this.setState({
      project
    })
  }

  render() {
    return (
      <div className="ProjectPage">
        <Navigation />
        <h2>{this.state.project.name}</h2>
        <p className="tagline">{this.state.project.language}</p>
        <p>{this.state.project.description}</p>
        <img src={this.state.project.image} alt="" />
        <Footer />
      </div>
    )
  }
}
