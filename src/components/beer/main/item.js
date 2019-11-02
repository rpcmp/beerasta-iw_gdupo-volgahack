import React from 'react';
import Alco from './img/alco.png';
import './item.scss';
// import Time from './img/time.png';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    // name - адрес. Количество человек, длительность, уровень алкогольности напитков, скок вкидываться
    render() {
        return (
            <div className="item">
                <p className="address">{this.props.address}</p>
                <div className="alco">
                    <img src={Alco}/>
                    <img src={Alco}/>
                    <img src={Alco}/>
                    <img src={Alco}/>
                    <img src={Alco}/>
                </div>
                <div className="people">
                    {/* <img/> */}
                    <p>Численность: {this.props.people}</p>
                </div>
                <div className="time">
                    {/* <img src={Time}/> */}
                    <p>Начало: {this.props.time}</p>
                </div>
                <p className="money">{this.props.money}</p>
                <button className="accept">
                    <p>Пойду!</p>
                </button>

            </div>
        )
    }
}

export default Item;