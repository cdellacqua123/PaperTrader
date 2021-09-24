const key = window.alphavantageAPIKey
export const getQuote = ticker => (
    $.ajax({
        url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${key}`,
        method: 'GET'
    })
)