import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return(
            <div>
                <h1 className='pt-header'>
                    <img className="logo" src="images/logo.png" />
                    Paper Trader
                </h1>
                <Link to={'/'} className="home-button"></Link>
            </div>
        )
    }
}

export default Header;