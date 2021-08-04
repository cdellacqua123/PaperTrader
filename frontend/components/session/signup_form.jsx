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
    }

    render() {
        return(
            <div>
                <h1 className='signup-head'>Paper Trader</h1>
                <h2 className='signup-desc'>Stock Market Simulator</h2>
                <h1>Create a new account:</h1>
                <form>
                    <label>Username:
                        <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    
                    <button onClick={this.handleSubmit} ><Link to="/users/show">Sign Up</Link> </button>
                    
                </form>
            </div>
        )
    }
};

export default SignupForm;