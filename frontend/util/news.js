export const fetchNews = () => (
    $.ajax({
        url: `https://finnhub.io/api/v1/news?category=general&token=c49cf6iad3ieskgqrvo0`,
        method: 'GET'
    })
)