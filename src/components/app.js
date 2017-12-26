import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "pages/home"
import Resume from "pages/resume"
import Project from "pages/project"

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/projects/:id" component={Project} />
          </div>
        </BrowserRouter>
      </div>
    )
  }

}

export default App
