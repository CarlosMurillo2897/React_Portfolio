import React from 'react';

import { images } from '../../constants/';
import './Navbar.scss';

const items = [
    'home', 'about', 'contact', 'work', 'skills', 'contact'
];

const Navbar = ()  => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
                {
                items.map((item) => (
                    <li key={`link-${item}`} className="app__flex p-text">
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;