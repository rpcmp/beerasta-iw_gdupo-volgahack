import React from 'react';
import {NavLink} from "react-router-dom"
import logo from './img/menu.png';
import './index.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            left: -150
        }

        this.showItems = this.showItems.bind(this);
    }

    render() {
        return (
            <div className="menu">
                <img className="img" src={logo} onClick={this.showItems}></img>
                <div className="items" style={this.state}>
                    <NavLink exact to="/" className="item">
                        <p>Главная</p>
                    </NavLink>
                    <NavLink to="/beer" className="item">
                        <p>Хочу выпить</p>
                    </NavLink>
                    <NavLink to="/friends" className="item">
                        <p>Хочу дружить</p>
                    </NavLink>
                    <NavLink to="/evangelie" className="item">
                        <p>Евангелие</p>
                    </NavLink>
                    <NavLink to="/login" className="item">
                        <p>Войти</p>
                    </NavLink>
                </div>
            </div>
        )
    }

    showItems() {
        if (this.state.left == 0) {
            this.setState({ left: -150 });
        } else {
            this.setState({left: 0});
        }
    }
}

export default Menu;