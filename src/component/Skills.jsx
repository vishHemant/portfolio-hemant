import React from 'react'
import javascript from '../assets/images/javascript.png'
import react from '../assets/images/react.png'
import MUIIcon from '../assets/images/MUI-Icon.png'
import typescript from '../assets/images/typescript.png'
import redux from '../assets/images/redux.png'
import html5 from '../assets/images/html5.png'
import css3 from '../assets/images/css3.png'
import bootstrap from '../assets/images/bootstrap.png'
import chakraUI from '../assets/images/chakra_logo.png'
import photopea from '../assets/images/photopea_logo.png'
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
                        <p>I am a Frontend Developer with a passion for learning and the ability to estimate future tasks. I am highly motivated, result-oriented, self-driven, and hard-working. As a fast learner, I am constantly seeking to improve my skills and stay up to date with the latest front-end development tools.
                            <br /> I have a strong knowledge of JavaScript, React.js, TypeScript, Redux Toolkit, HTML5, CSS3, Tailwind CSS, Bootstrap, Chakra UI, SASS/SCSS, Material UI, React Testing Library, ApexCharts, REST API, Axios, NPM, and Git. Additionally, I am proficient in design tools such as Photopea and Figma. I also have a solid understanding of various computer software packages, frameworks, and tools used in modern technology.
                        </p>
                    </div>
                    <div className="column right">
                        <div className="info">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                                <img src={javascript} alt="javascript" />
                            </a>
                            <a href="https://reactjs.org/" target="_blank">
                                <img src={react} alt="react.js" />
                            </a>
                            <a href="https://mui.com/material-ui/getting-started/" target="_blank">
                                <img src={MUIIcon} alt="MUI Material" />
                            </a>
                            <a href="https://www.typescriptlang.org/" target="_blank">
                                <img src={typescript} alt="typeScript" />
                            </a>
                            <a href="https://redux.js.org" target="_blank">
                                <img src={redux} alt="redux" />
                            </a>
                            <a href="https://www.w3.org/html/" target="_blank">
                                <img src={html5} alt="html5" />
                            </a>
                            <a href="https://www.w3schools.com/css/" target="_blank">
                                <img src={css3} alt="css3" />
                            </a>
                            <a href="https://getbootstrap.com" target="_blank">
                                <img src={bootstrap} alt="bootstrap" />
                            </a>
                            <a href="https://chakra-ui.com/" target="_blank">
                                <img src={chakraUI} alt="chakraUI" />
                            </a>
                            <a href="https://www.photopea.com/" target="_blank">
                                <img src={photopea} alt="photopea" />
                            </a>
                            <a href="https://sass-lang.com" target="_blank">
                                <img src={sass} alt="sass" />
                            </a>
                            <a href="https://tailwindcss.com/" target="_blank">
                                <img src={tailwindCss} alt="react" />
                            </a>
                            <a href="https://git-scm.com/" target="_blank">
                                <img src={git} alt="git" />
                            </a>
                            <a href="https://www.postman.com/" target="_blank">
                                <img src={postman} alt="postman" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills