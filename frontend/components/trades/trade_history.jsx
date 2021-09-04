import React from 'react';
import TradeRender from './trade_render';

class TradeHistory extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.searchAccount = this.searchAccount.bind(this)
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id)
            .then(response =>
                Object.values(response.accounts).forEach(account => {
                    if (account.trade_hist.length > 0) {
                        this.props.findAllTrades(account.id);
                    }
                }
                )
            )
    };

    searchAccount(e) {
        e.preventDefault();
        if (this.state && this.state.selectedAcct) {
            const stateAcct = this.state.selectedAcct
            let account = this.props.accounts.find(account => account.account_name === stateAcct)
            let acctsTrades = []
            this.props.trades.forEach(trade => {
                if (trade[0].acc_id === account.id) {
                    acctsTrades = trade
                }
            })
            this.setState({ 'noAcct': false })
            this.setState({ ['acctsTrades']: acctsTrades })
        } else {
            this.setState({ 'noAcct': true })
        }
    };

    renderTrades() {
        if (this.state && this.state.noAcct) {
            return (
                <h1 className="no-acct-trd-hist">No account selected</h1>
            )
        }
        else if (this.state && this.state.acctsTrades && this.state.acctsTrades.length > 0) {
            let trades = this.state.acctsTrades
            console.log(trades)
            return (
                <div>
                    <table className="render-trd-table">
                        <thead>
                            <tr>
                                <th className="trd-table-head">Action</th>
                                <th className="trd-table-head">Ticker</th>
                                <th className="trd-table-head">Price</th>
                                <th className="trd-table-head">Quantity</th>
                                <th className="trd-table-head">Amount</th>
                            </tr>
                        </thead>
                        {trades.map(trade =>
                            <TradeRender
                                action={trade.action}
                                ticker={trade.ticker}
                                price={trade.price}
                                quantity={trade.num_shares}
                                amount={trade.total_dr_cr}
                            />
                        )}
                    </table>
                </div>
            )
        } else if (this.state && this.state.acctsTrades && this.state.acctsTrades.length === 0) {
            return (
                <div>
                    <h1 className="cash-amt-trd">No Trades Have Occured In Account</h1>
                </div>
            )
        }
    }

    

    render() {
        if (!this.props.trades) {
            return null
        }
        let {accounts} = this.props
        return(
            <div>
                <h1 className="select-acct-head-hist">Please Select an Account</h1>
                <div className="select-n-button-hist">
                    <select className="select-hist" onChange={this.handleInput('selectedAcct')}>
                        <option> </option>
                        {accounts.map(account => (
                            <option >{account.account_name}</option>
                        ))}
                    </select>
                    <button className="search-acct" onClick={this.searchAccount}>
                        Select Account
                    </button>
                </div>
                <div>{this.renderTrades()}</div>
            </div>
        )
    }
};

export default TradeHistory;