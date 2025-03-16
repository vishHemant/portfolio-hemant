import React, { useState } from 'react'
import pokemon from '../assets/images/projects_img/pokemon_img.png'
import parallax_website from '../assets/images/projects_img/parallax_website.png'
import analog_clock from '../assets/images/projects_img/analog_clock.png'
import ellipse from '../assets/images/projects_img/ellipse.png'
import regroup from '../assets/images/projects_img/regroup.png'
import regroupadmin from '../assets/images/projects_img/regroupadmin.png'
import saiservice from '../assets/images/projects_img/saiservice.png'
import thegsf from '../assets/images/projects_img/thegsf.png'
import wallop from '../assets/images/projects_img/wallop.png'
import leaninworld from '../assets/images/projects_img/leaninworld.png'
import movecentral from '../assets/images/projects_img/movecentral.png'



const Projects = ({ projects }) => {

    const [viewMore, setViewMore] = useState(false)




    const cardsArray = [
        {
            link: 'https://regroupweb.betadelivery.com/',
            img: regroup,
            title: 'Regroup',
            middleTitle: 'React | Chakra UI | CSS | API Integration',
            subTitle: 'This web app is inspired by another social media web apps but different it is a particular community, group and subgroup in which we can like, comment, sent post etc.'
        },
        {
            link: 'https://admin.regroupweb.betadelivery.com/',
            img: regroupadmin,
            title: 'Regroup Admin Dashboard',
            middleTitle: 'React + Typescript | Chakra UI | CSS | API Integration',
            subTitle: 'This is sports man activity checker dashboard is managed by owner. In which owner managed the user data like delete, update etc.'
        },
        {
            link: 'https://vishhemant.github.io/pokemon',
            img: pokemon,
            title: 'Pokemon',
            middleTitle: 'React | CSS | API Integration',
            subTitle: 'Created in React with API integration and we can search different pokemon characters. And with device compatebility.'
        },
        {
            link: 'https://www.saiservice.com/',
            img: saiservice,
            title: 'Sai Service',
            middleTitle: 'Bootstrap | HTML | CSS | JS | jQuery',
            subTitle: 'Designed frontend part of this website by me, is a fitness website with simple design'
        },
        {
            link: 'https://thegsf.co/',
            img: thegsf,
            title: 'GSF',
            middleTitle: 'Bootstrap | HTML | CSS | JS | jQuery',
            subTitle: 'Designed frontend part of this by me, is a fitness website with simple design'
        },
        {
            link: 'https://www.leaninworld.com/',
            img: leaninworld,
            title: 'Lean In World',
            middleTitle: 'Bootstrap | HTML | CSS | JS | jQuery',
            subTitle: 'Offering volunteers for social causes and connecting volunteers with the most suitable project for them according to the difficulty level, country, and type of project.'
        },
        {
            link: 'https://move-central.ca/',
            img: movecentral,
            title: 'Move Central',
            middleTitle: 'Bootstrap | HTML | CSS | JS | jQuery',
            subTitle: 'This is an effective and innovative company, on route to becoming the most requested moving service in Canada. This company is not only economical, but is also simple to use, making your moving experience more enjoyable!'
        },
        {
            link: 'https://wallopbc.com/',
            img: wallop,
            title: 'Wallop Brewing PVT LTD',
            middleTitle: 'Wordpress | CSS | JS',
            subTitle: 'Created a website for organization with svg images animation .'
        },
        {
            link: 'https://vishhemant.github.io/parallax-website',
            img: parallax_website,
            title: 'Parallax website',
            middleTitle: 'HTML | CSS | JS',
            subTitle: 'Created a unique parallax website for learning purpose and changed some images position dynamically during scroll.'
        },
        {
            link: 'https://vishhemant.github.io/analog-clock',
            img: analog_clock,
            title: 'Analog clock',
            middleTitle: 'HTML | CSS | JS',
            subTitle: 'Created a dynamically analog clock with unique design.'
        },
        {
            link: 'https://vishhemant.github.io/ellipses-animation',
            img: ellipse,
            title: 'Ellipses',
            middleTitle: 'HTML | CSS',
            subTitle: 'Created a ellipse using html, css and javascript.'
        }
    ]





    return (
        <section className="projects" id="projects" ref={projects}>
            <div className="max_width">
                <h2 className="title">My Projects</h2>
                <div className="card_box">

                    {cardsArray?.slice(0, viewMore ? cardsArray?.length : 6)?.map(({ link, img, title, middleTitle, subTitle }, index) =>
                        <div className="card" key={index}>
                            <div className="box">
                                <img src={img} alt="Pokemon" />
                            </div>
                            <div className="card_content">
                                <h4>{title}</h4>
                                <h5>{middleTitle}</h5>
                                <p>{subTitle}</p>
                            </div>
                            <div className="lets_talk">
                                <a href={link} target="_blank">
                                    <span className="one"></span>
                                    <span className="two"></span>
                                    Visit
                                </a>
                            </div>
                        </div>
                    )}

                </div>

                {cardsArray.length > 6 && (
                    <div className="lets_talk">
                        <button onClick={() => setViewMore(!viewMore)}>
                            <span className="one"></span>
                            <span className="two"></span>
                            {!viewMore ? 'View More' : 'View Less'}
                        </button>
                    </div>
                )}

            </div>
        </section>
    )
}

export default Projects