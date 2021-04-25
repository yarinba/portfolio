import React from 'react'

const About = () => (
    <section id="about" className="s-about target-section">
    <div className="row">
      <div className="column large-3 tab-12">
        <img className="s-about__pic" src="images/info-icon.png" alt="" />
      </div>
      <div className="column large-9 tab-12 s-about__content">
        <h3>About Me</h3>
        <p>
            My name is Yarin Barnes and I'm from Rishon Lezion, Israel. <br/>
            Computers have held a life-long fascination for me. 
            What started as an interest in just using them developed
            into a growing desire to understand how a collection of 
            simple ideas and components can interact to produce amazing things.
        </p>
        <p>
            I'm  1st year student at MTA, undertaking Computer Science B.Sc 
        </p> 
        <p>
            I'm a student with outstanding self-learning skills,
            highly motivated, responsible and reliable.
            Great team player with excellent communication skills.
        </p>
        <p>
            Enthusiastic about Full-Stack development, <br />
            my current goal is to absorb knowledge and to be responsible
            for engineering the end-to-end features of a system.
        </p>
      </div>
    </div> 
  </section> 
)

export default About