import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "pages/home"
import Resume from "pages/resume"

import Footer from "./footer"
import Navigation from "./navigation"

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/resume" exact component={Resume} />
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    )
  }

}

export default App