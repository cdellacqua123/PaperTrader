import React from 'react';

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
        this.props.history.push("/users/show");
    }

    guestLogin(e) {
        e.preventDefault();
        this.props.login({ username: 'Guest', password: 'password'})
        this.props.history.push("/users/show")
            
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
            return(
                <div>
                    <h1 className='login-head'>Paper Trader</h1>
                    <h2 className='login-head2'>Stock Market Simulator</h2>
                    <h1 className='login-desc'>Log into existing profile:</h1>
                    <form>
                        <div className="login-err">
                            {this.renderErrors()}
                        </div>
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
                            Login
                        </button>
                        <br></br>
                        <button className='guest-button' onClick={this.guestLogin} >
                            Guest Login
                        </button>
                    </form>
                </div>
            )
        }
        return (
            <div>
                <h1 className='login-head'>Paper Trader</h1>
                <h2 className='login-head2'>Stock Market Simulator</h2>
                <h1 className='login-desc'>Log into existing profile:</h1>
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
                        Login
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