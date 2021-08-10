import React from 'react';
import getDailyInfo from './api_fetch';
import { chartData, createChart } from './charting';

class TradesShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout(this.state);
        this.props.history.push('/');
    }

    homePage = () => {
        this.props.history.push("/");
    }
    
    render() {
        let ticker = 'TSLA'
        let fetchStockData = getDailyInfo(ticker)
        fetchStockData
            .then(response => chartData(response, ticker))
            .then(chartView => createChart(chartView))
            .then(chart => {return (chart.render())})
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

            </div>
        )
    }
        
}

export default TradesShow;