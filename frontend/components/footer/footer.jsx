import React from "react";
// import getFooterStocks from "./footer_api_fetch";

class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.searchStock = this.searchStock.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    searchStock(e) {
        e.preventDefault();
        let ticker = this.state['ticker']
        if (ticker){
            this.props.getQuote(ticker)
                .then(api_res => this.cleanData(api_res))
        }
    }

    cleanData(api_res) {
        if (api_res.quote['Error Message']) {
            this.setState({['badTicker']: true})
        } else {
            let keys = Object.keys(api_res.quote['Time Series (Daily)'])
            let today = api_res.quote['Time Series (Daily)'][keys[0]]
            let tomorrow = api_res.quote['Time Series (Daily)'][keys[1]]
            let change = (today['4. close'] - tomorrow['4. close']).toFixed(2)
            this.setState({ ['change']: change })
            this.setState({ ['close']: parseFloat(today['4. close']).toFixed(2) })
            this.setState({ ['volume']: today['5. volume'] })
            this.setState({ ['quickQuote']: true })
            this.setState({ ['badTicker']: false })
        }
    }

    renderQuote() {
        if (this.state && this.state.quickQuote) {
            let {change, close, volume} = this.state
            if (change > 0) {
                return (
                    <div className="footer-quotes">
                        <h1 className='footer-h1'>Last: ${close}</h1>
                        <h1 className='footer-h1'>Change: </h1>
                        <h1 className='footer-pos-change'>+${change}</h1>
                        <h1 className='footer-h1'>Volume: {volume}</h1>
                    </div>
                )
            } else if (change < 0) {
                change = change * -1
                return (
                    <div className="footer-quotes">
                        <h1 className='footer-h1'>Last: ${close}</h1>
                        <h1 className='footer-h1'>Change: </h1>
                        <h1 className='footer-neg-change'>-${change}</h1>
                        <h1 className='footer-h1'>Volume: {volume}</h1>
                    </div>
                )
            } else {
                return (
                    <div className="footer-quotes">
                        <h1 className='footer-h1'>Last: ${close}</h1>
                        <h1 className='footer-no-change'>Change: ${change}</h1>
                        <h1 className='footer-h1'>Volume: {volume}</h1>
                    </div>
                )
            }
        } else if (this.state && this.state.badTicker) {
            return(<h1 className='footer-error'>Please enter a valid ticker symbol</h1>)
        }
    }

    render() {
        return ( 
            <div className='pt-footer'>
                <div className='footer-button-n-input'>
                    <input
                    type='text'
                    onChange={this.handleInput('ticker')}
                    className='footer-input'
                    />
                    <button onClick={this.searchStock} className="footer-button">
                        Get Quote
                    </button>
                </div>
                {this.renderQuote()}
                <div className='links'>
                <a href="https://github.com/cdellacqua123">
                    <img src="images/GitHub.png" className='footer-image'/>
                </a>
                <a href="https://www.linkedin.com/in/christopher-dell-acqua-b6765995/">
                    <img src="images/Linkedin.png" className='footer-image'/>
                </a>
                    <a href="https://cdellacqua123.github.io/personal-site/">
                    <img src="images/www-globe.png" className='footer-image' />
                </a>
                <a href="https://angel.co/u/christopher-dell-acqua">
                    <img src="images/angel_list.png" className='footer-image' />
                </a>
                </div>
            </div>
        )
        // }
    }
}

export default Footer;