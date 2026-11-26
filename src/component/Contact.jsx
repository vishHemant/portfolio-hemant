import React from 'react'

const socialLinks = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/hemant-vishwakarma-36a879239/',
        icon: 'fab fa-linkedin-in',
    },
    {
        label: 'Twitter',
        href: 'https://x.com/Hemant12081?s=09',
        icon: 'fab fa-twitter',
    },
    {
        label: 'Github',
        href: 'https://github.com/vishHemant',
        icon: 'fab fa-github',
    },
]

const Contact = ({ contact }) => {
    return (
        <section className="contact" id="contact" ref={contact}>
            <div className="max_width">
                <h2 className="title">Contact me</h2>

                <div className="contact-panel">
                    <div className="contact-panel-main">
                        <p className="contact-kicker">Available for work</p>
                        <h3 className="contact-headline">
                            Let’s build something<br />worth shipping.
                        </h3>
                        <p className="contact-copy">
                            Open to frontend roles, freelance projects, and collaboration.
                            Prefer email — I usually reply within a day.
                        </p>

                        <a className="contact-email" href="mailto:vishhemant08@gmail.com">
                            vishhemant08@gmail.com
                        </a>

                        <div className="contact-meta">
                            <span>Hemant Vishwakarma</span>
                            <span className="contact-meta-dot"></span>
                            <span>Mumbai, India</span>
                        </div>

                        <div className="lets_talk contact_cta">
                            <a href="mailto:vishhemant08@gmail.com">
                                <span className="one"></span>
                                <span className="two"></span>
                                Say Hello
                            </a>
                        </div>
                    </div>

                    <div className="contact-panel-side">
                        <div className="contact-side-label">Stay connected</div>
                        <p className="contact-social-copy">
                            Follow along for project updates and conversations.
                        </p>

                        <div className="contact-socials">
                            {socialLinks.map((item) => (
                                <a
                                    className="contact-social-btn"
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={item.label}
                                >
                                    <span className="contact-social-btn-icon">
                                        <i className={item.icon}></i>
                                    </span>
                                    <span className="contact-social-btn-label">{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
