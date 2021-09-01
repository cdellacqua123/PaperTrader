import React from 'react';
import AccountIndexItem from './account_index_item';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

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
            <Header/>
            <button className='logout' onClick={this.handleLogout}>Logout
            </button>
            <Sidebar accounts={accounts} />
            <h2 className='welcome'>Welcome, {this.props.currentUser.username}!</h2>
            <br></br>
            
            
            
            <table className="acct-table">
                <thead>
                    <tr>
                        <th className="table-headers">Account Nickname</th>
                        <th className="table-headers">Cash Balance</th>
                        <th className="table-headers"># of Equities</th>
                    </tr>
                </thead>
                {accounts.map(account => (
                        <AccountIndexItem
                        account_name = {account.account_name}
                        balance={account.balance}
                        equities={account.equities}
                        />
                    ))
                }
                </table>
            </div>
        )
        
    }
}
export default UsersForm;