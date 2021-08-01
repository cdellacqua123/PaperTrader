import React from 'react';

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
                </form>
            </div>
        )
    }
};

export default SignupForm;