import React from 'react'

const Contact = ({contact}) => {
    return (
        <section class="contact" id="contact" ref={contact}>
            <div class="max_width">
                <h2 class="title">Contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Reach Out to me!</div>
                        {/* <p>Discuss a Project or just want to say Hi? My inbox is open for all.</p> */}
                        <div class="icons">
                            <div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Hemant Vishwakarma</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">Mumbai, India</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope email-icon"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title"><a href="mailto:vishhemant08@gmail.com"
                                        target="_blank">vishhemant08@gmail.com</a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="column right">

                        <div class="text">Stay Connected</div>

                        <div className="btn_main">
                            <div class="icon_button">
                                <div class="icon">
                                    <a href="https://www.linkedin.com/in/hemant-vishwakarma-36a879239/" target="_blank" y>
                                    <i class="fab fa-linkedin-in"></i>
                                    </a></div><a href="https://www.linkedin.com/in/hemant-vishwakarma-36a879239/" target="_blank" y>
                                    <span>LinkedIn </span></a>
                            </div>
                            <div className="btn_second">
                                <div class="icon_button">
                                    <div class="icon">
                                        <a href="https://x.com/Hemant12081?s=09" target="_blank" y>
                                            <i class="fab fa-twitter"></i>
                                        </a></div><a href="https://x.com/Hemant12081?s=09" target="_blank" y>
                                        <span>Twitter </span></a>
                                </div>
                            </div>
                            <div class="icon_button">
                                <div class="icon">
                                    <a href="https://github.com/vishHemant" target="_blank" y>
                                        <i class="fab fa-github"></i>
                                    </a></div><a href="https://github.com/vishHemant" target="_blank" y>
                                    <span>Github </span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact