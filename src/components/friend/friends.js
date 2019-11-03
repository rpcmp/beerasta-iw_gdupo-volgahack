import React from 'react';
import './friends.scss';
import Hello from './img/hello.png';
import Friend from './friend';

class Friends extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

        // this.state = {
        //     users: localStorage.getItem("users")
        // };
    }

    render() {
        return (
            <div className="friends">
                <div class="current-user">
                    <img className="userpic" src={Hello} alt="userpic"></img>
                    <div className="info">
                        <h4 className="name">
                            Приветствую тебя, {localStorage.getItem("user")}.<br/>Здесь ты можешь найти себе новых друзей.
                        </h4>
                    </div>
                </div>
                <div className="all-users">
                    {this.state.users.map((number) => {
                        return <Friend number/>
                    })}
                    {/* <Friend username="Test"/> */}

                </div>
            </div>
        );
    }
}

export default Friends;