import React from 'react';
import getDailyInfo from './api_fetch';
import { chartData, createChart } from './charting';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

class TradesShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
        this.searchStock = this.searchStock.bind(this);
        this.checkTrade = this.checkTrade.bind(this);
        this.executeTrade = this.executeTrade.bind(this);
    };

    handleLogout(e) {
        e.preventDefault();
        this.props.logout(this.state);
        this.props.history.push('/');
    };

    homePage = () => {
        this.props.history.push("/");
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    searchStock(e){
        e.preventDefault();
        let ticker = this.state["ticker"];
        let fetchStockData = getDailyInfo(ticker);
        let check = document.getElementById("chart");
        if (check.childNodes.length) {
            check.removeChild(check.firstChild)};
        fetchStockData
            .then(response => chartData(response, ticker))
            .then(chartView => createChart(chartView))
            .then(chart => { 
                return (chart.render()) 
            })
    };

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id);
        let fetchStockData = getDailyInfo("AAPL");
        fetchStockData
            .then(response => chartData(response, "AAPL"))
            .then(chartView => createChart(chartView))
            .then(chart => {
                return (chart.render())
            })
    };

    checkTrade(e) {
        e.preventDefault();
        let selectedAcct = {}
        if (!this.state) {
            return (this.setState({['tradeErr']: "Please select an account"}))
        }
        for (let i = 0; i < this.props.accounts.length; i++) {
            if (this.props.accounts[i].account_name === this.state.account){
                selectedAcct = this.props.accounts[i]
            }
        };
        let {ticker, action, numShares} = this.state;
        if (ticker && action && numShares && selectedAcct.id) {
            if (action === 'Buy') {
                this.executeTrade(ticker, action, numShares, selectedAcct)
            } else if (action === 'Sell') {
                numShares = (numShares * -1)
                this.executeTrade(ticker, action, numShares, selectedAcct)
            }
        } else {
            return (this.setState({ ['tradeErr']: "Please fill out all fields" }))
        }
    };

    executeTrade(ticker, action, numShares, account) {
        const that = this;
        placingTrade(ticker, action, numShares, account, that)
        async function placingTrade(ticker, action, numShares, account, that) {
            let data = await getDailyInfo(ticker);
            let price = data.close[0]
            if (price * numShares > account.balance) {
                return (that.notEnoughFundsSetState());
            };

            let accountId = account.id
            let trade = {
                symbol: ticker.toUpperCase(), action: action,
                acct_id: accountId, price: price, shares: numShares
            };
            let remTrade = {
                ticker: ticker.toUpperCase(), action: action,
                acc_id: accountId, fill_price: price, num_shares: numShares, total_dr_cr: (numShares * price).toFixed(2)
            };

            that.props.placeTrade(trade);
            that.props.rememberTrade(remTrade);
            that.tradeSuccessSetState();
        }
    }

    notEnoughFundsSetState() {
        return (this.setState({ ['tradeErr']: 'Insufficient funds for trade'}))
    }

    tradeSuccessSetState() {
        this.setState({['tradePlaced']: "Trade has been placed!"})
        this.setState({ ['tradeErr']: null})
    }

    checkErrors() {
        if (this.state && this.state.tradeErr) {
            return (<h1 className="trade-err">{this.state.tradeErr}</h1>)
        } else {
            return null
        };
    };

    tradeSuccess() {
        if (this.state && this.state.tradePlaced) {
            return (<h1 className="trade-placed-success">{this.state.tradePlaced}</h1>)
        } else {
            return null
        };
    };

    render() {
        if (!this.props.accounts){
            return null
        }
        let { accounts } = this.props
        return(
            <div>
                <Header/>
                <button className='logout' onClick={this.handleLogout}>Logout
                </button>
                <Sidebar/>
                <div id="chart"></div>
                <h1 className="symbol">Symbol</h1>
                <br></br>
                <input 
                type="text"
                onChange={this.handleInput('ticker')}
                className="ticker-input"
                />
                <button onClick={this.searchStock} className="search-ticker">
                    Search Ticker
                </button>
                <div>{this.checkErrors()}</div>
                <br></br>
                    <label className="select-acct-head">Select Account</label>
                    <select className="select-acct" onChange={this.handleInput('account')}>
                        <option> </option>
                        {accounts.map(account => (
                            <option key={account.id}>{account.account_name}</option>
                        ))}
                    </select>
                    <label className="select-action-head">Select Action</label>
                    <select className="select-action" onChange={this.handleInput('action')}>
                            <option> </option>
                            <option>Buy</option>
                            <option>Sell</option>
                    </select>
                    <label className="quantity-head">Quantity</label>
                    <input 
                    type="integer" 
                    onChange={this.handleInput('numShares')}
                    className="quantity-input"
                    />
                    <button className="place-trade-button" onClick={this.checkTrade}>
                        Place Trade
                    </button>
                    {/* <div>{this.checkErrors()}</div> */}
                    <div>{this.tradeSuccess()}</div>
                <br></br>
                {/* <button className="back-button" onClick={this.cancel}>
                    Back to Accounts page
                </button> */}
            </div>
        )
    }
};

export default TradesShow;