import React from 'react';
import { Link } from 'react-router-dom';
import exchange from '../../../app/assets/images/exchange.jpg'


class Home extends React.Component {
    render() {
        return(
            <div className='homepage'>
            <h1 className='home-h1'>Paper Trader</h1>
            <img className='home-pic'src={exchange}/>
            <div className="home-block">
                <h1 className='about'>About this website</h1>
                <p className="description">
                    This is sample text  that will be changed to include details
                    about what this site is, how to use it, and who it's for.
                </p>
                <button className='home-create'><Link to="/signup">Create Account</Link></button>
                <br/>
                <button className='home-login'><Link to="/login">Login</Link></button>
            </div>
            </div>
        )
    }
}

export default Home;