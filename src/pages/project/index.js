import React from "react"
import projects from "data/projects"
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
    this.seState({
      project
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.project.name}</h2>
        <p className="tagline">{this.state.project.language}</p>
        <p>{this.state.project.description}</p>
      </div>
    )
  }
}
