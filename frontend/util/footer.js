export const getQuote = ticker => (
    $.ajax({
        url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=QYD67QW2GZO16DQF`,
        method: 'GET'
    })
)