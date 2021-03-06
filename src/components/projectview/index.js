import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default class ProjectView extends React.Component {

  render() {
    return (
      <Link to={`/projects/${this.props.url}`} className="ProjectView">
        <div className="workbox"><img src={this.props.image} alt="" className="detail" /></div>
      </Link>
    )
  }

}
