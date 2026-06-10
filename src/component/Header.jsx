import React, { useState } from 'react'

const Header = () => {

    const [headerBg, setHeaderBg] = useState();
    const [crossMenu, setCrossMenu] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            setHeaderBg(true);
        } else {
            setHeaderBg(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);



    return (
        <header>
            <nav className={headerBg ? "navbar sticky" : "navbar"}>
                <div className="max_width">
                    <div className="logo logo_mobile">
                        <a href="#">H<span>V.</span>
                        </a>
                    </div>
                    <ul className={!crossMenu ? "menu": "menu active"}>
                        <li>
                            <a href="#home" onClick={()=> setCrossMenu(!crossMenu)} className="menu-btn">Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={()=> setCrossMenu(!crossMenu)} className="menu-btn">About</a>
                        </li>
                        <div className="logo logo_desktop">
                            <a href="#">H<span>V.</span>
                            </a>
                        </div>
                        <li>
                            <a href="#skills" onClick={()=> setCrossMenu(!crossMenu)} className="menu-btn">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={()=> setCrossMenu(!crossMenu)} className="menu-btn">Projects</a>
                        </li>
                        <div className="overlay" onClick={()=> setCrossMenu(!crossMenu)}></div>
                    </ul>
                    <div className="menu-btn">
                        {/* <i> */}
                            <svg fill="currentColor" viewBox="0 0 20 20" width={35} onClick={()=> setCrossMenu(!crossMenu)}>
                                {!crossMenu && <path  fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>}
                               {crossMenu &&  <path  fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>}
                            </svg>
                        {/* </i> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header


