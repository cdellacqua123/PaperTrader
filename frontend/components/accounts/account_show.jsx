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

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id)
            .then(response =>
                Object.values(response.accounts).forEach(account => {
                    if (account.equities.length > 0) {
                        this.props.findPositions(account.id);
                    }
                }
                )
            )
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    searchAccount(e) {
        e.preventDefault();
        if (this.state && this.state.selectedAcct) {
            const stateAcct = this.state.selectedAcct
            let account = this.props.accounts.find(account => account.account_name === stateAcct)
            let positions = []
            positions.push(account.balance)
            this.props.positions.forEach(position => {
                if (position.acct_id === account.id) {
                    positions.push([position.symbol, position.shares, position.price])
                }
            })
            this.setState({'noAcct': false})
            this.setState({ ['positions']: positions })
        } else {
            this.setState({'noAcct': true})
        }
    };

    renderPositions() {
        if (this.state && this.state.noAcct) {
            return (
                <h1 className="cash-amt-pos">No account selected</h1>
            )
        }
        else if (this.state && this.state.positions && this.state.positions.length > 1) {
            let positions = this.state.positions
            return(
                <div>
                    <h1 className="cash-head-pos">Cash:</h1>
                    <h1 className="cash-amt-pos">${positions[0]}</h1>
                    <table className="render-pos-table">
                        <thead>
                            <tr>
                                <th className="pos-table-head">Symbol</th>
                                <th className="pos-table-head">Quantity</th>
                                <th className="pos-table-head">Cost Basis</th>
                            </tr>
                        </thead>
                        {positions.map(position =>
                            <PositionRender
                                ticker={position[0]}
                                shares={position[1]}
                                price={position[2]}
                            />
                        )}
                    </table>
                </div>
            )
        } else if (this.state && this.state.positions && this.state.positions.length === 1){
            let positions = this.state.positions
            return(
                <div>
                    
                    <h1 className="cash-head-pos">Cash:</h1>
                    <h1 className="cash-amt-pos">${positions[0]}</h1>
                    
                    <h1 className="no-pos-warning">No Positions In Selected Account</h1>
                </div>
            )
        }
    }

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
                <h1 className="select-acct-head-show">View Account Positions</h1>
                <div className="select-n-button-acct-show">
                <select className="select-acct-show" onChange={this.handleInput('selectedAcct')}>
                    <option className="acct-show-option"> </option>
                    {accounts.map(account => (
                        <option >{account.account_name}</option>
                    ))}
                </select>
                <button className="search-account" onClick={this.searchAccount}>
                    Select Account
                </button>
                </div>
                <div>{this.renderPositions()}</div>
            </div>
        )
    }
};

export default AccountShow;
