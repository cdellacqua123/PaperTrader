import axios from "axios";
import 'regenerator-runtime/runtime';


export default async function getDailyInfo(ticker) {
    // // Stock candles
    // finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
    //     console.log(data)
    // });

    const key = window.alphavantageAPIKey
    
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${key}`;
    let pull = axios.get(url)
        .then((res) => {
            if (!res) {
                console.log('Error:');
            } else if (res.status !== 200) {
                console.log('Status:', res.status);
            } else {
                // data is successfully parsed as a JSON object:
                return res;
            }
        });
    let arg = {
        'date': [], 'open': [], 'high': [], 'low': [], 'close': [],
        'vol': []
    };
    let response = await pull;
    let table = await response.data['Time Series (Daily)'];
    for (let date in table) {
        let open = parseFloat(table[date]['1. open']);
        let high = parseFloat(table[date]['2. high']);
        let low = parseFloat(table[date]['3. low']);
        let close = parseFloat(table[date]['4. close']);
        arg['date'].push(date);
        arg['open'].push(open.toFixed(2));
        arg['high'].push(high.toFixed(2));
        arg['low'].push(low.toFixed(2));
        arg['close'].push(close.toFixed(2));
        arg['vol'].push(table[date]['5. volume']);
    };
    return arg;
}
