import React from 'react';
import './user.scss';
import Userpic from './img/userpic.png';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user">
                <img className="userpic" src={Userpic} alt="userpic"></img>

                <p>Приветствую тебя, о просвященный {this.props.username}</p>
            </div>
        );
    }
}

export default User;