import React from 'react';
import AccountIndexItem from './account_index_item';
import Sidebar from '../sidebar/sidebar';

class UsersForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
        this.placeTrade = this.placeTrade.bind(this);
    }

    placeTrade = () => {
        this.props.history.push("trades/show")
    }

    handleLogout(e) {
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
        console.log(accounts)
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
            <Sidebar accounts={accounts}/>
            <button className='logout' onClick={this.handleLogout}>Logout
            </button>
            <br></br>
            
            <table className="acct-table">
                <tr>
                    <th className="table-headers">Account Nickname</th>
                    <th className="table-headers">Cash Balance</th>
                    <th className="table-headers"># of Equities</th>
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
                    <button className="create-acct" onClick={this.createAcct}>
                        Create New Trading Account
                    </button>
                    <br></br>
                    <button className="trade-redirect" onClick={this.placeTrade}>
                        Place a Trade
                    </button>
            </div>
        )
        
    }
}
export default UsersForm;