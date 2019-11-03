import React from 'react';
import './header.scss';
import Logo from './img/logo.png';
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <img className="img" src={Logo} alt="logo"></img>
            <div className="nav">
                <NavLink exact to="/" className="item"><p>Главная</p></NavLink>
                <NavLink to="/beer" className="item"><p>Пирушки</p></NavLink>
                <NavLink to="/friends" className="item"><p>Друзяшки</p></NavLink>
                <NavLink to="/evangelie" className="item"><p>Писание</p></NavLink>
                <NavLink to="/login" className="item"><p>Логин</p></NavLink>
            </div>
        </div>
    );
}

export default Header;