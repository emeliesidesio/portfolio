import React from "react"
import "./index.css"

class Navigation extends React.Component {
  render() {
    return (
      <div className={`navigation-container ${this.props.className}`}>
        {this.props.text}
      </div>
    )
  }
}

export default Navigation
