import React from 'react'
import arrowUpRight from '../assets/images/arrow-up-right.webp'
import TypingAnimation from './TypingAnimation'


const Home = ({ home }) => {





    return (

        <section className="home" id="home" ref={home}>
            <div className="max_width">
                <div className="home-content">
                    <div className="text-1">Hello <span className="hand_wave">👋</span> I'm</div>
                    <div className="text-2">Hemant Vishwakarma</div>
                    <div className="text-3">And I'm a <TypingAnimation />
                    </div>

                    <div className="lava_main">
                        <a href="#about" className="lava-lamp">
                            <div className="bubble"></div>
                            <div className="bubble1"></div>
                            <div className="bubble2"></div>
                            <div className="bubble3"></div>
                        </a>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Home