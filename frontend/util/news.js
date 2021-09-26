export const fetchNews = (api_key) => (
    $.ajax({
        url: `https://finnhub.io/api/v1/news?category=general&token=${api_key}`,
        method: 'GET'
    })
)