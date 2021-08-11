import React from 'react';
import { Link } from 'react-router-dom';
import AccountIndexItem from './account_index_item';


class UsersForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.placeTrade = this.placeTrade.bind(this);
    }

    placeTrade = () => {
        this.props.history.push("trades/show")
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.logout(this.state)
        this.props.history.push('/');
    }

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id)
    };

    homePage = () => {
        this.props.history.push("/");
    }

    createAcct = () => {
        this.props.history.push("account/create");
    }
    render() {
        if (!this.props.accounts) {
            return null
        }

        let {accounts} = this.props
        return(
            <div>
                <h1 className='pt-header'>
                    <img className="logo" src="images/logo.png" />
                    Paper Trader
                </h1>
                <button className="home-button" onClick={this.homePage}>
                </button>
            <h2 className='welcome'>Welcome, {this.props.currentUser.username}!</h2>
            <br></br>
            
            <button className='logout' onClick={this.handleSubmit}>Logout
            </button>
            <br></br>
            
            <table className="acct-table">
                <tr>
                    <th className="table-headers">Account Nickname</th>
                    <th className="table-headers">Cash Balance</th>
                    <th className="table-headers">Equities</th>
                </tr>
                {accounts.map(account => (
                        <AccountIndexItem
                        account_name = {account.account_name}
                        balance={account.balance}
                        equities={account.equities}
                        />
                        
                    ))
                }
                </table>
                
            <button onClick={this.createAcct}>Create New Trading Account</button>
            <button onClick={this.placeTrade}>Place Trade</button>
            </div>
        )
        
    }
}
export default UsersForm;