const key = window.finnhubAPIKey
export const fetchNews = () => (
    $.ajax({
        url: `https://finnhub.io/api/v1/news?category=general&token=${key}`,
        method: 'GET'
    })
)