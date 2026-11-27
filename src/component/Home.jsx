import React from 'react'
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

                    <a href="#about" className="scroll_down" aria-label="Scroll to about section">
                        <span className="scroll_down_arrows">
                            <span className="scroll_down_arrow"></span>
                            <span className="scroll_down_arrow"></span>
                        </span>
                    </a>

                </div>
            </div>
        </section>

    )
}

export default Home