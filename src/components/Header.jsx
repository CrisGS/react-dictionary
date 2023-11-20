import React from 'react';
import headerImage from '../assets/header.png';
import '../assets/header.css';

function Header() {
    return (
        //<h1>Dictionary</h1>
        <img src={headerImage} alt="Dictionary" />
    );
}

export default Header;