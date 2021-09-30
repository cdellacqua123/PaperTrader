import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    signUpPage = () => {
        this.props.history.push("/signup");
    }

    loginPage = () => {
        this.props.history.push("/login");
    }

    render() {
        return(
            <div className='homepage'>
            
                <h1 className='pt-header'>
                    <img className="logo" src="images/logo.png" />
                    Paper Trader
                </h1>
                <img className='home-pic'src="images/exchange.jpg"/>
                <div className="home-block">
                    <h1 className='about'>About this website</h1>
                    <p className="description">
                        Paper Trader is a free website that allows users to test
                        out their stock and/or ETF trading strategies without the risk
                        of losing their own money. To use it, simply create a profile
                        through the "Sign Up" button, create a new trading account with
                        a nickname and any amount of fake dollars you'd like to start with,
                        and click "Place Trade". If you'd like to try the website before
                        creating an account, use the "Guest Login" feature located in 
                        the "Login" page.
                    </p>
                        <button onClick={this.signUpPage} className='home-create'>Create Profile
                        </button>
                    <br/>
                        <button onClick={this.loginPage} className='home-login'>Login
                        </button>
                    <br />
                </div>
                <div className='home-links'>
                    <a href="https://github.com/cdellacqua123">
                        <img src="images/GitHub.png" className='home-footer-image' />
                    </a>
                    <a href="https://www.linkedin.com/in/christopher-dell-acqua-b6765995/">
                        <img src="images/Linkedin.png" className='home-footer-image' />
                    </a>
                    <a href="https://cdellacqua123.github.io/personal-site/">
                        <img src="images/www-globe.png" className='home-footer-image' />
                    </a>
                    <a href="https://angel.co/u/christopher-dell-acqua">
                        <img src="images/angel_list.png" className='home-footer-image' />
                    </a>
                </div>
            </div>
        )
    }
}

export default Home;