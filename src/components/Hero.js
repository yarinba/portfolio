import React, { Component } from 'react'
import SmoothScrolling from '../smoothScrolling'

export default class Hero extends Component {
  scrollAbout() {
    SmoothScrolling.scrollTo("about");
  }
  render() {
    return (
      <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg" />
      <div className="row s-hero__content">
        <div className="column">
          <div className="s-hero__content-about">
            <h1>Yarin Barnes.</h1>
          </div> 
        </div>
      </div> 
      <div className="s-hero__scroll">
        <a onClick={this.scrollAbout} className="s-hero__scroll-link">
          <span className="scroll-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
          </span>
          <span className="scroll-text">Scroll Down</span>
        </a>
      </div>
    </section>
    )
  }
}
