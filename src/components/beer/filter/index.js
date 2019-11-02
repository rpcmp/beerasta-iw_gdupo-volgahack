import React from 'react';
import './filter.scss';

function Nav() {
    return (
        <div className="filter">
            <div className="item">
                <p>Улица</p>
                <input className="street"></input>
            </div>
            <div className="item">
                <p>Уровень алкоголя</p>
                <input className="alcolevel"></input>
            </div>
            <div className="item">
                <p>Время начала</p>
                <input className="time"></input>
            </div>
            <div className="item">
                <p>Стоимость</p>
                <input className="money"></input>
            </div>
            <div className="item">
                <p>Найти</p>
                <input className="submit" type="submit"></input>
            </div>
        </div>
    )
}

export default Nav;