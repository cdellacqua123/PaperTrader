import React from 'react';
import getDailyInfo from './api_fetch';
import { chartData, createChart } from './charting';


class TradesShow extends React.Component {

    render() {
        let ticker = 'TSLA'
        let fetchStockData = getDailyInfo(ticker)
        fetchStockData
            .then(response => chartData(response, ticker))
            .then(chartView => createChart(chartView))
            .then(chart => {return (
                <div>
                    {chart.render()}
                </div>
        )})
        return(null)
    }
        
}

export default TradesShow;