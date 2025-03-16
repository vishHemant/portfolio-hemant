import React from 'react'

const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();


    return (
        <footer>
            <span>Created By <a href="https://www.linkedin.com/in/hemant-vishwakarma-36a879239/" target="_blank">Hemant
                Vishwakarma</a> | <span class="far fa-copyright"></span> <span id="year">{year}</span> All rights reserved
            </span>
        </footer>
    )
}

export default Footer