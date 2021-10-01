import React from 'react';
import AccountIndexItem from './account_index_item';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Footer from '../footer/footer';
import NewsArticleItem from './news_article_render';

class UsersShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
        this.placeTrade = this.placeTrade.bind(this);
    }

    placeTrade = () => {
        this.props.history.push("trades/show")
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout(this.state)
        this.props.history.push('/');
    }

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id);
        if (window.finnhubAPIKey.length > 0) {
            const api_key = window.finnhubAPIKey
            this.props.fetchNews(api_key);
        }
    };

    homePage = () => {
        this.props.history.push("/");
    }

    createAcct = () => {
        this.props.history.push("account/create");
    }

    render() {
        if (!this.props.accounts || !this.props.news) {
            return null
        }
        let {accounts, news} = this.props
        return(
            <div>
            <Header/>
            <button className='logout' onClick={this.handleLogout}>Logout
            </button>
            <Sidebar/>
            <h2 className='welcome'>Welcome, {this.props.currentUser.username}!</h2>
            <br></br>
            <table className="acct-table">
                <thead>
                    <tr>
                        <th className="table-headers">Account Nickname</th>
                        <th className="table-headers">Cash Balance</th>
                        <th className="table-headers"># of Equities</th>
                    </tr>
                </thead>
                    {accounts.slice(0).reverse().map(account => (
                        <AccountIndexItem
                        key={account.id}
                        account_name = {account.account_name}
                        balance={account.balance}
                        equities={account.equities}
                        />
                    ))
                }
                </table>
                <div className='news-container'>
                    <h1 className='market-news'>Market News</h1>
                    {news.map(news_article => (
                        <NewsArticleItem
                        key={news_article.id} 
                        datetime = {news_article.datetime}
                        headline = {news_article.headline}
                        image = {news_article.image}
                        source = {news_article.source}
                        summary = {news_article.summary}
                        url = {news_article.url}
                        />
                    ))}
                </div>
                <Footer getQuote={this.props.getQuote}/>
            </div>
        )
    }
}
export default UsersShow;