import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

class AccountForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.account
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
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
            // shorting_allowed: this.state.shorting_allowed,
            user_id: this.state.user_id
        });
        this.props.history.push("/users/show");
        
    };

    cancel = () => {
        this.props.history.push("/users/show");
    }

    homePage = () => {
        this.props.history.push("/");
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout(this.state)
        this.props.history.push('/');
    }
    
    render(){
        return(
            <div>
                <Header/>
                <br></br>
                <button className='logout' onClick={this.handleLogout}>Logout
                </button>
                <Sidebar/>
                <h1 className="new-trade-acct-header">Create a Trading Account</h1>
                <form>
                <h1 className="new-trade-acct-nickname-head">Nickname:</h1><br></br>
                    <input className="new-trade-acct-nickname-input" onChange={this.handleInput('account_name')}/>
                    <br></br>
                <h1 className="new-trade-acct-bal-head">Balance:</h1><br></br>
                    <input className="new-trade-acct-bal-input" onChange={this.handleInput('balance')}/>
                    <br></br>
                {/* Shorting?: */}
                {/* <input onChange={this.handleInput('shorting_allowed')}/> */}
                <button className="cancel-button" onClick={this.cancel}>
                    Cancel
                </button>
                <br></br>
                    <button className="create-button" onClick={this.handleSubmit}>
                        Create Trading Account
                    </button>
                <br></br>
                </form>
            </div>
        )
    }
};

export default AccountForm;