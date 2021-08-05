import React from 'react';
import { Link } from 'react-router-dom';

class AccountForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.account
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.submitAcct({
            account_name: this.state.account_name,
            balance: this.state.balance,
            shorting_allowed: this.state.shorting_allowed,
            user_id: this.state.user_id
        })
        
    };

    render(){
        return(
                <form>
                <h1>Nickname:</h1>
                <input onChange={this.handleInput('account_name')}/>
                <h1>Balance:</h1>
                <input onChange={this.handleInput('balance')}/>
                Shorting?:
                <input onChange={this.handleInput('shorting_allowed')}/>
                <button onClick={this.handleSubmit}>
                    <Link className='create-acct-link' to="/users/show">Create Trading Account</Link>
                </button>
                </form>
        )
    }
};

export default AccountForm;