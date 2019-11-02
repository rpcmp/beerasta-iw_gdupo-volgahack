import React from 'react';
import Menu from '../menu/index';
import {NavLink} from "react-router-dom"
import './index.scss';

function Login() {
    return (
        <div className="login">
            <div className="header">
                <Menu />
            </div>
            <div className="form">
                <h2 align="center">Войти</h2>
                <input className="text-input"></input>
                <input className="text-input" type="password"></input>
                <div class="submit-container">
                    <NavLink to="/account" className="submit login-submit"><p>Войти</p></NavLink>
                    <NavLink to="/register" className="submit register-submit"><p>Регистрация</p></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Login;