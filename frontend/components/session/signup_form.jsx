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
        console.log(this.props.errors)
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
                    <li className="err" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };

    componentWillUnmount() {
        this.props.clearSessionErrors();
    };

    render() {
            return (
            <div className='signup-container'>
                <h1 className='signup-head'>Paper Trader</h1>
                <h2 className='signup-head2'>Stock Market Simulator</h2>
                <h1 className='signup-desc'>Register</h1>
                <h1 className='signup-or'>or
                    <Link to='/login' className='signup-redirect'>
                        log in
                    </Link>
                </h1>
                <form>
                    <div>
                        {this.renderErrors()}
                    </div>
                    <br></br>
                        <input
                            className='signup-uname-field'
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            placeholder="Username"
                        />
                    <br></br>
                        <input
                            className='signup-email-field'
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            placeholder="Email"
                        />
                    <br></br>
                        <input
                            className='signup-pw-field'
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                        />
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