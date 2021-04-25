import React from 'react'
import SmoothScrolling from '../smoothScrolling'

export default class Header extends React.Component {
  scrollHome() {
    SmoothScrolling.scrollTo("hero");
  }
  scrollAbout() {
    SmoothScrolling.scrollTo("about");
  }
  scrollSkills() {
    SmoothScrolling.scrollTo("resume");
  }
  scrollContact() {
    SmoothScrolling.scrollTo("contact");
  }
  render() {
    return (
      <header className="s-header">
      <div className="row s-header__nav-wrap">
        <nav className="s-header__nav">
          <ul>
            <li><a onClick={this.scrollHome}>Home</a></li>
            <li><a onClick={this.scrollAbout}>About</a></li>
            <li><a onClick={this.scrollSkills}>Skills</a></li>
            <li><a onClick={this.scrollContact}>Contact</a></li>
          </ul>
        </nav>
      </div> 
      <a className="s-header__menu-toggle" onClick={this.scrollHome} title="Menu">
        <span className="s-header__menu-icon" ></span>
      </a>
    </header>
    )
  }

}

