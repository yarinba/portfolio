import React from 'react'
import { yarinCV } from '../cvfile/'

const Contact = () => (
    <section id="contact" className="s-contact target-section">

    <div className="row s-contact__header">
        <div className="column large-12">
            <h3 className="section-header-allcaps">Contact Me</h3>
        </div>
    </div>

    <div className="row s-contact__content">
        <div className="column large-4 medium-12">

            <div className="row contact-infos">
                <div className="column large-12 medium-6 tab-12">
                    <div className="contact-block">
                        <h5 className="contact-block__header">Email</h5>
                        <p className="contact-block__content">
                            <a className="mailtoui" href="mailto:yarinb7877@gmail.com">yarinb7877@gmail.com</a>
                        </p>
                    </div> 
                </div>
                <div className="column large-12 medium-6 tab-12">
                    <div className="contact-block">
                        <h5 className="contact-block__header">Phone</h5>
                        <p className="contact-block__content">
                            <a href="tel:+972542652245">+972 54 265 2245</a>
                        </p>
                    </div> 
                    <a class="btn btn--download" href={yarinCV} download>Download CV</a>
                </div>
                
            </div> 
        </div>
    </div> 

</section> 
)

export default Contact