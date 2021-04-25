import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SmoothScrolling from './smoothScrolling'


export default class App extends React.Component {
  componentDidMount() {
    SmoothScrolling.scrollTo("hero");
  }
  render() {
    return (
        <div className="App">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </div>
    )
  }
}

