import React from "react";
import getFooterStocks from "./footer_api_fetch";

class Footer extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.setState({ 'AAPL': []})
    //     this.setState({ 'AMZN': [] })
    //     this.setState({ 'MSFT': [] })
    //     this.setState({ 'TSLA': [] })
    // }

    getStocks() {
        // let stocks = ['AAPL', 'AMZN', 'MSFT', 'TSLA']
        // const stock_info = {}
        // stocks.forEach(ticker => {
        //     stock_info[ticker] = getFooterStocks(ticker)
        // }).then(result => console.log(result))
        getFooterStocks('AAPL').then(result => 
            // <div>
            // <h1>HELLO</h1>
            // <h1>
            //     {result.ticker}
            //     {result.last}
            //     {result.change}
            // </h1>
            // </div>
            {return (
            // <h1 className="test">
            //     {/* {result.ticker} */}
            //     Hello
            // </h1>
            this.renderStocks(result)
            )}
            )
    }

    renderStocks(stock) {
        console.log(stock)
        if (stock) {
            console.log(stock.ticker)
            return (
                <h1 className="test">
                    {stock.ticker}
                </h1>
            )
        }
    }

    componentDidMount() {
        this.getStocks()
    }

    render() {
        // this.getStocks()
        // let stock_info = this.getStocks()
        // if (stock_info) {
        //     console.log(stock_info)
        return ( 
            <div className='pt-footer'>
                {/* <h1 className='test'>Here's a test</h1>
                {this.renderStocks()} */}
                <a href="https://github.com/cdellacqua123">
                    <img src="images/GitHub.png" width="15" height="15"/>
                </a>
                <a href="www.linkedin.com/in/christopher-dell-acqua-b6765995">
                    <img src="images/Linkedin.png" width="15" height="15"/>
                </a>
                {/* <a href="personal site">
                    <img src="images/globe.png" width="15" height="15" />
                </a> */}
                <a href="https://angel.co/u/christopher-dell-acqua">
                    <img src="images/angel_list.png" width="15" height="15" />
                </a>
            </div>
        )
        // }
    }
}

export default Footer;