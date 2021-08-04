import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    render() {
        return (
            <div>
                <h1 className='login-head'>Paper Trader</h1>
                <h2 className='login-head2'>Stock Market Simulator</h2>
                <h1 className='login-desc'>Log into existing account:</h1>
                <form>
                    <br></br>
                    <label className='login-uname'>Username:
                        <br></br>
                        <input
                            className='login-uname-field'
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <br></br>
                    <label className='login-pw'>Password:
                        <br></br>
                        <input
                            className='login-pw-field'
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <br></br>
                    <button className='login-button' onClick={this.handleSubmit} >
                        <Link className='login-link' to="/users/show">Log in</Link> 
                        </button>

                </form>
            </div>
        )
    }
};

export default LoginForm;