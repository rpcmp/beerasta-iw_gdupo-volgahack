import React from 'react';
// import Alco from './img/alco.png';
import './item.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    // name - адрес. Количество человек, длительность, уровень алкогольности напитков, скок вкидываться
    render() {
        return (
            <div className="item">
                <p className="address">{this.props.address}</p>
                <div className="people">
                    <p>Численность: {this.props.people}</p>
                </div>
                <div className="time">
                    <p>Начало: {this.props.time}</p>
                </div>
                <button className="accept">
                    Пирую
                </button>
            </div>
        )
    }
}

export default Item;