import React from 'react';
import './doctrine.scss';

class Doctrine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="doctrine">
                <div className="search">
                    <input className="input"></input>
                    <button className="button">Найти</button>
                </div>
                <div className="chapter">
                    <p>
`
                    </p>
                </div>
            </div>
        );
    }
}

export default Doctrine;