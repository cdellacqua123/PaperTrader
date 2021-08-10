import React from 'react';
import getDailyInfo from './api_fetch';
import { chartData, createChart } from './charting';

class TradesShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
        this.searchStock = this.searchStock.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout(this.state);
        this.props.history.push('/');
    }

    homePage = () => {
        this.props.history.push("/");
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

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
    }

    render() {
        if (!this.state) {
            let fetchStockData = getDailyInfo("AAPL");
            fetchStockData
                .then(response => chartData(response, "AAPL"))
                .then(chartView => createChart(chartView))
                .then(chart => {
                    return (chart.render())
                })
        }
        return(
            <div>
                <h1 className='pt-header'>
                    <img className="logo" src="images/logo.png" />
                    Paper Trader
                </h1>
                <button className="home-button" onClick={this.homePage}/>
                <br></br>
                <button className='logout' onClick={this.handleLogout}>Logout
                </button>
                <div id="chart"></div>
                <input 
                type="text"
                onChange={this.handleInput('ticker')}
                />
                <button onClick={this.searchStock}></button>
            </div>
        )
    }
        
}

export default TradesShow;