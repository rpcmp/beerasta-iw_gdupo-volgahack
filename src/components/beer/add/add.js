import React from 'react';
import './add.scss';

class Add extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="add">
                <h2 className="title">Устроить пирушку</h2>

                <div className="form">
                    <div className="item">
                        <p>Адрес</p>
                        <input className="input input-text"></input>
                    </div>
                    <div className="item">
                        <p>Количество человек</p>
                        <div className="half-container">
                            <input className="input input-half" placeholder="Min"></input>
                            <input className="input input-half" placeholder="Max"></input>
                        </div>

                    </div>
                    <div className="item">
                        <p>Описание</p>
                        <input className="input input-text"></input>
                    </div>
                    <div className="item">
                        <p>Время начала</p>
                        <input type="time" className="input"></input>
                    </div>
                    <div className="item">
                        <button className="input input-submit">Пируем</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add;