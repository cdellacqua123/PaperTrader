import React from 'react';
import PositionRender from './position_render';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

class AccountShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this);
        this.searchAccount = this.searchAccount.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    };

    handleLogout(e) {
        e.preventDefault();
        this.props.logout(this.state)
        this.props.history.push('/');
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    searchAccount(e) {
        e.preventDefault();
        
        const stateAcct = this.state.selectedAcct
        let account = this.props.accounts.find(account => account.account_name === stateAcct)
        let positions = []
        this.props.positions.forEach( position => {
            if (position.acct_id === account.id) {
                positions.push([position.symbol, position.shares, position.price])
            }
        })
        this.setState({['positions']: positions})
    };

    renderPositions() {
        
        if (this.state && this.state.positions && this.state.positions.length > 0) {
            console.log(this.state.positions)
            let positions = this.state.positions
            return(
                <div>
                    <table>
                        <tr>
                            <th>Symbol</th>
                            <th>Quantity</th>
                            <th>Cost Basis</th>
                        </tr>
                        {positions.map(position => 
                            <PositionRender
                                ticker = {position[0]}
                                shares = {position[1]}
                                price = {position[2]}
                            />
                        )}
                    </table>
                </div>
            )
        } else if(this.state && this.state.positions && this.state.positions.length === 0) {
            return(
                <h1>No positions in account</h1>
            )
        }
    }

    componentDidMount(){
        this.props.fetchAcctsForUser(this.props.currentUser.id)
            .then(response =>   
                Object.values(response.accounts).forEach(account => 
                {
                    if (account.equities.length > 0) {
                        this.props.findPositions(account.id);
                    }
                }
            )
        )
    };

    render(){
        if (!this.props.accounts) {
            return null
        }
        let {accounts} = this.props
        return(
            <div>
                <Header/>
                <button className='logout' onClick={this.handleLogout}>Logout
                </button>
                <Sidebar/>
                <label className="select-acct-head">Please Select an Account</label>
                <select className="select-acct" onChange={this.handleInput('selectedAcct')}>
                    <option> </option>
                    {accounts.map(account => (
                        <option >{account.account_name}</option>
                    ))}
                </select>
                <button className="search-account" onClick={this.searchAccount}>
                    Select Account
                </button>
                <div>{this.renderPositions()}</div>
            </div>
        )
    }
};

export default AccountShow;
