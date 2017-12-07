import React from "react"
import Hero from "./hero"
import About from "./about"
import Work from "./work"
import Contact from "./contact"
import Footer from "./footer"

class App extends React.Component {

  render() {
    return (
      <div>
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    )
  }

}

export default App
