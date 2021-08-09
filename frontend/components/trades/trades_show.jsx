import React from 'react';
import getDailyInfo from './api_fetch';

class TradesShow extends React.Component {

    render() {
        let fetchStockData = getDailyInfo("TSLA")
        fetchStockData.then(response => {return (
            console.log(response)
        )})
        return (
            <h1>Working</h1>
        )
    }
}

export default TradesShow;