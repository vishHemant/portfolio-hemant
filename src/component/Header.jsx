import React, { useEffect, useState } from 'react'

const Header = () => {
    const [headerBg, setHeaderBg] = useState(false)
    const [crossMenu, setCrossMenu] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {
            setHeaderBg(window.scrollY >= 20)
        }

        scrollHandler()
        window.addEventListener('scroll', scrollHandler, { passive: true })
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    useEffect(() => {
        document.body.style.overflow = crossMenu ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [crossMenu])

    const closeMenu = () => setCrossMenu(false)
    const toggleMenu = () => setCrossMenu((open) => !open)

    return (
        <header>
            <nav className={headerBg ? 'navbar sticky' : 'navbar'}>
                <div className="max_width">
                    <div className="logo logo_mobile">
                        <a href="#home" onClick={closeMenu}>H<span>V.</span></a>
                    </div>
                    <ul className={crossMenu ? 'menu active' : 'menu'}>
                        <li>
                            <a href="#home" onClick={closeMenu}>Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={closeMenu}>About</a>
                        </li>
                        <li>
                            <a href="#experience" onClick={closeMenu}>Experience</a>
                        </li>
                        <div className="logo logo_desktop">
                            <a href="#home">H<span>V.</span></a>
                        </div>
                        <li>
                            <a href="#skills" onClick={closeMenu}>Skills</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={closeMenu}>Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu}>Contact</a>
                        </li>
                        <div className="overlay" onClick={closeMenu}></div>
                    </ul>
                    <button
                        type="button"
                        className="menu-btn"
                        aria-label={crossMenu ? 'Close menu' : 'Open menu'}
                        aria-expanded={crossMenu}
                        onClick={toggleMenu}
                    >
                        <svg fill="currentColor" viewBox="0 0 20 20" width={32} height={32}>
                            {!crossMenu && (
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            )}
                            {crossMenu && (
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
