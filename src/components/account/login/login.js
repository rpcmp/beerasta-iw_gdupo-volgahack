import React from 'react';
import './login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errorDisplay: "none",
            error: ""
        };

        this.login = this.login.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.showError = this.showError.bind(this);
    }

    render() {
        return (
            <div className="login">
                <div className="form">
                    <p className="title">Логин</p>
                    <div className="item">
                        <input className="input" placeholder="username" onInput={e => this.setUsername(e.target.value)}></input>
                    </div>
                    <div className="item">
                        <input className="input" type="password" placeholder="password" onInput={e => this.setPassword(e.target.value)}></input>
                    </div>
                    <div className="item" style={{display: this.state.errorDisplay}}>
                        <p className="error">{this.state.error}</p>
                    </div>
                    <div className="item btn-container">
                        <button className="btn btn-login" onClick={this.login}>Войти</button>
                        <button className="btn btn-register">Регистрация</button>
                    </div>
                </div>
            </div>
        );
    }

    setUsername(name) {
        this.setState({ username: name });
    }

    setPassword(pass) {
        this.setState({ password: pass });
    }

    showError(err) {
        this.setState({
            errorDisplay: "block",
            error: err
        });
    }

    login() {
        fetch("https://beerasta.herokuapp.com/login?username=" + this.state.login + "&password=" + this.state.password,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resp => {
                if (resp.ok) {
                    this.props.history.push("/register");
                } else {
                    this.showError(resp.statusText);
                }
            });
    }
}

export default Login;