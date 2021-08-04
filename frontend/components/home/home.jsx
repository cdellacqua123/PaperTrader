import React from 'react';
import { Link } from 'react-router-dom';
import exchange from '../../../app/assets/images/exchange.jpg'


class Home extends React.Component {
    render() {
        return(
            <div className='homepage'>
            <h1 className='home-h1'>Welcome to PaperTrader</h1>
                <img className='home-pic'
                src={exchange}
                
                />
            <Link className='home-create'to="/signup">Create Account</Link>
            <br></br>
            <Link className='home-login' to="/login">Login</Link>
            </div>
        )
    }
}

export default Home;