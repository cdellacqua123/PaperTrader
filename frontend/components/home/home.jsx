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
                    This is sample text  that will be changed to include details
                    about what this site is, how to use it, and who it's for.
                </p>
                    <button onClick={this.signUpPage} className='home-create'>Create Profile
                    </button>
                <br/>
                    <button onClick={this.loginPage} className='home-login'>Login
                    </button>
                <br />
            </div>
            </div>
        )
    }
}

export default Home;