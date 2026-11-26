import React from 'react'

const experiences = [
    {
        role: 'React JS Developer',
        company: 'Website Developers India, Mumbai',
        period: 'Jul 2024 – Present',
        points: [
            'Developed scalable React.js, Next.js, and TypeScript applications using reusable component architecture.',
            'Led a company website redesign that reduced LCP by 40% and improved Core Web Vitals scores.',
            'Integrated REST APIs across 10+ modules using RTK Query with caching, optimistic updates, and pagination.',
            'Introduced TypeScript across modules, reducing QA-reported runtime errors by ~35%.',
            'Implemented PWA features (offline support, install prompts), boosting session retention by ~20%.',
            'Mentored 2 junior developers in TypeScript best practices and modular component architecture.',
        ],
    },
    {
        role: 'Junior Frontend Developer',
        company: 'Website Developers India, Mumbai',
        period: 'Jun 2022 – Jul 2024',
        points: [
            'Delivered 15+ client websites and 7+ admin dashboards with cross-browser, fully responsive layouts.',
            'Built a reusable component library used across 5+ projects, cutting UI development time by ~20%.',
            'Converted Figma designs into pixel-perfect interfaces using React.js, JavaScript, HTML5, CSS3, and Bootstrap.',
            'Maintained legacy applications with jQuery, enhancing UI interactions and form validations.',
            'Participated in debugging, testing, deployment, and Agile sprint activities.',
        ],
    },
]

const education = [
    {
        title: 'Bachelor of Computer Applications (BCA)',
        place: 'ICST, M.G.K.V.P. University, Varanasi',
        period: '2017 – 2020',
        meta: 'CGPA: 7.62/10',
    },
    {
        title: 'Senior Secondary (XII), Science',
        place: 'S.G.R. Inter College, Jaunpur',
        period: '2017',
        meta: 'CGPA: 7.24/10',
    },
]

const Experience = ({ experience }) => {
    return (
        <section className="experience" id="experience" ref={experience}>
            <div className="max_width">
                <h2 className="title">Experience</h2>

                <div className="experience-timeline">
                    <span className="experience-line" aria-hidden="true"></span>
                    {experiences.map((job) => (
                        <article className="experience-item" key={`${job.role}-${job.period}`}>
                            <span className="experience-dot" aria-hidden="true"></span>
                            <div className="experience-meta">
                                <span className="experience-period">{job.period}</span>
                            </div>
                            <div className="experience-body">
                                <h3>{job.role}</h3>
                                <p className="experience-company">{job.company}</p>
                                <ul>
                                    {job.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="experience-extras">
                    <div className="experience-education">
                        <h3>Education</h3>
                        {education.map((item) => (
                            <div className="education-item" key={item.title}>
                                <h4>{item.title}</h4>
                                <p>{item.place}</p>
                                <span>{item.period} · {item.meta}</span>
                            </div>
                        ))}
                    </div>

                    <div className="experience-achievement">
                        <h3>Achievement</h3>
                        <p>
                            HackerRank React — 5-Star rated for hooks, state management, and performance patterns.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
