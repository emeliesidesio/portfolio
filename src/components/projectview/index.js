import React from "react"
import { Link } from "react-router-dom"

export default class ProjectView extends React.Component {

  render() {
    return (
      <Link to={`/projects/${this.props.url}`} className="ProjectView">
        <div>
          <p className="tagline">{this.props.name}</p>
          <img src={this.props.image} alt="" />
        </div>
      </Link>
    )
  }

}
