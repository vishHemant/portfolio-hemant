import React from 'react'

const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();


    return (
        <footer>
            <span>Created By <a href="https://www.linkedin.com/in/hemant-vishwakarma-36a879239/" target="_blank" rel="noopener noreferrer">Hemant
                Vishwakarma</a> | <span className="far fa-copyright"></span> <span id="year">{year}</span> All rights reserved
            </span>
        </footer>
    )
}

export default Footer