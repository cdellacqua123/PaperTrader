import React from 'react';
import { Link } from 'react-router-dom';
import AccountIndexItem from './account_index_item';

class UsersForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout(this.state)
    }

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id)
    };

    
    render() {
        if (!this.props.accounts) {
            return null
        }
        let {accounts} = this.props
        return(
            <div>
            <h1 className='pt-header'>Paper Trader</h1>    
            <h2 className='welcome'>Welcome, {this.props.currentUser.username}!</h2>
            <br></br>
            <button className='logout' onClick={this.handleSubmit}>
                <Link className='logout-txt' to='/'>Logout</Link>
            </button>
            <br></br>
            {
                accounts.map(account => (
                    <AccountIndexItem
                    account_name = {account.account_name}
                    balance={account.balance}
                    equities={account.equities}
                    />
                    ))
            }
            <Link to='account/create'>Create New Trading Account</Link>
            </div>
        )
        
    }
}
export default UsersForm;