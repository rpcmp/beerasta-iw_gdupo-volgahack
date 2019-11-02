import React from 'react';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <NavLink exact to="/beer/" className="item">
                <p>Пьют</p>
            </NavLink>
            <NavLink to="/beer/new" className="item">
                <p>Хочу пить</p>
            </NavLink>
            <NavLink to="/beer/go" className="item">
                <p>Иду пить</p>
            </NavLink>
        </nav>
    )
}

export default Nav;