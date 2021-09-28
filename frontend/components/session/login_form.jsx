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
        this.guestLogin = this.guestLogin.bind(this)
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
        // this.props.history.push("/users/show");
    }

    guestLogin(e) {
        e.preventDefault();
        this.props.login({ username: 'Guest', password: 'password'});
        this.props.history.push("/users/show");
            
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
    }
    
    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    render() {
        return(
            <div className="login-container">
                <h1 className='login-head'>Paper Trader</h1>
                <h2 className='login-head2'>Stock Market Simulator</h2>
                <h1 className='login-desc'>Log In 
                    
                
                </h1>

                <h2 className="login-or">or
                    <Link to='/signup' className="login-redirect">
                        create an account
                    </Link>
                </h2>
                
                <form>
                    <div>
                        {this.renderErrors()}
                    </div>
                    <br></br>
                        <input
                            className='login-uname-field'
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            placeholder="Username"
                        />
                    <br></br>
                        <input
                            className='login-pw-field'
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                        />
                    <br></br>
                    <button className='login-button' onClick={this.handleSubmit} >
                        Sign in
                    </button>
                    <br></br>
                    <button className='guest-button' onClick={this.guestLogin} >
                        Guest Login
                    </button>
                </form>
            </div>
        )
    }
};

export default LoginForm;