import React from 'react'
import javascript from '../assets/images/javascript.png'
import react from '../assets/images/react.png'
import nextjs from '../assets/images/nextjs.png'
import MUIIcon from '../assets/images/MUI-Icon.png'
import typescript from '../assets/images/typescript.png'
import redux from '../assets/images/redux.png'
import html5 from '../assets/images/html5.png'
import css3 from '../assets/images/css3.png'
import bootstrap from '../assets/images/bootstrap.png'
import chakraUI from '../assets/images/chakra_logo.png'
import photopea from '../assets/images/Photopea_logo.png'
import sass from '../assets/images/sass.png'
import tailwindCss from '../assets/images/tailwind-css.png'
import git from '../assets/images/git.png'
import postman from '../assets/images/postman.png'


const Skills = ({ skills }) => {
    return (
        <section className="skills" id="skills" ref={skills}>
            <div className="max_width">
                <h2 className="title">My skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My creative skills & experiences</div>
                        <p>
                            Frontend Developer with 4+ years shipping production React.js and Next.js apps.
                            I focus on reusable components, RTK Query, Core Web Vitals, accessibility (WCAG),
                            and clean, maintainable TypeScript.
                        </p>

                        <p>
                            Stack: React.js, Next.js, TypeScript, JavaScript (ES6+), Redux Toolkit, RTK Query,
                            Context API, HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, Chakra UI, Radix UI, GSAP,
                            REST APIs, Socket.io, Stripe Checkout, Jest, React Testing Library, Git, Vite, and Figma.
                        </p>

                        <p>
                            Comfortable with PWA features, CI/CD workflows, Chrome DevTools performance profiling,
                            and Agile/Scrum delivery alongside designers, backend engineers, and QA.
                        </p>
                    </div>
                    <div className="column right">
                        <div className="info">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={javascript} alt="javascript" />
                            </a>
                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={react} alt="react.js" />
                            </a>
                            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={nextjs} alt="next.js" />
                            </a>
                            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={typescript} alt="typeScript" />
                            </a>
                            <a href="https://redux.js.org" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={redux} alt="redux" />
                            </a>
                            <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={html5} alt="html5" />
                            </a>
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={css3} alt="css3" />
                            </a>
                            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={tailwindCss} alt="tailwind css" />
                            </a>
                            <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={bootstrap} alt="bootstrap" />
                            </a>
                            <a href="https://chakra-ui.com/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={chakraUI} alt="chakraUI" />
                            </a>
                            <a href="https://mui.com/material-ui/getting-started/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={MUIIcon} alt="MUI Material" />
                            </a>
                            <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={sass} alt="sass" />
                            </a>
                            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={git} alt="git" />
                            </a>
                            <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={postman} alt="postman" />
                            </a>
                            <a href="https://www.photopea.com/" target="_blank" rel="noopener noreferrer">
                                <img loading='lazy' src={photopea} alt="photopea" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
