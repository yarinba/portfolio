import React from 'react'

const Skills = () => (
    <section id="resume" className="s-resume target-section">
    <div className="row s-resume__section">
    <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">My Skills</h3>
    </div>
    <div className="column large-9 tab-12">
        <div className="resume-block">
            <ul className="skill-bars-fat">
                <li>
                <div className="progress percent90"></div>
                <strong>C</strong>
                </li>
                <li>
                <div className="progress percent60"></div>
                <strong>Python</strong>
                </li>
                <li>
                <div className="progress percent85"></div>
                <strong>HTML</strong>
                </li>
                <li>
                <div className="progress percent85"></div>
                <strong>CSS</strong>
                </li>
                <li>
                <div className="progress percent65"></div>
                <strong>Javascript</strong>
                </li>
                <li>
                <div className="progress percent65"></div>
                <strong>Node.js</strong>
                </li>
                <li>
                <div className="progress percent65"></div>
                <strong>React</strong>
                </li>
            </ul>
        </div> 

    </div>
</div> 
    </section>
)

export default Skills