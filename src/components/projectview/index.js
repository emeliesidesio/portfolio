import React from "react"
import { Link } from "react-router-dom"

export default class ProjectView extends React.Component {

  render() {
    return (
      <Link to={`/projects/${this.props.url}`} className="ProjectView">
        <div>
          <img src={this.props.image} alt="" />
          <p>{this.props.name}</p>
          <p>{this.props.language}</p>
          <p>{this.props.description}</p>
        </div>
      </Link>
    )
  }

}
