import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return(e) => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
        .then(this.successfulSubmit.bind(this))
    }

    successfulSubmit() {
        if (this.props.errors.length === 0) {
            this.props.history.push("/users/show")
        } else {
            this.props.history.push("/signup")
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.errors.length) {
            return (
                <div>
                    <h1 className='signup-head'>Paper Trader</h1>
                    <h2 className='signup-head2'>Stock Market Simulator</h2>
                    <h1 className='signup-desc'>Create a new profile:</h1>
                    <form>
                        <div className="signup-err">
                            {this.renderErrors()}
                        </div>
                        <br></br>
                        <label className='signup-uname'>Username:
                            <br></br>
                            <input
                                className='signup-uname-field'
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                        </label>
                        <br></br>
                        <label className='signup-email'>Email:
                            <br></br>
                            <input
                                className='signup-email-field'
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <br></br>
                        <label className='signup-pw'>Password:
                            <br></br>
                            <input
                                className='signup-pw-field'
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <br></br>
                        <button className='signup-button' onClick={this.handleSubmit} >
                            Sign Up
                        </button>

                    </form>
                </div>
            )
        }
        return(
            <div>
                <h1 className='signup-head'>Paper Trader</h1>
                <h2 className='signup-head2'>Stock Market Simulator</h2>
                <h1 className='signup-desc'>Create a new profile:</h1>
                <form>
                    <br></br>
                    <label className='signup-uname'>Username:
                    <br></br>
                        <input
                        className='signup-uname-field'
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        />
                    </label>
                    <br></br>
                    <label className='signup-email'>Email:
                    <br></br>
                        <input
                            className='signup-email-field'
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <br></br>
                    <label className='signup-pw'>Password:
                    <br></br>
                        <input
                            className='signup-pw-field'
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <br></br>
                    <button className='signup-button' onClick={this.handleSubmit} >
                        Sign Up
                    </button>
                    
                </form>
            </div>
        )
    }
};

export default SignupForm;