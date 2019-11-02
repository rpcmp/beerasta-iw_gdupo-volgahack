import React from 'react';
import Menu from '../../menu/index';
import Nav from './nav';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <Menu/>
            <Nav/>
        </header>
    )
}

export default Header;