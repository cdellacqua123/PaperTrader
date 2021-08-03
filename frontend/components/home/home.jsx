import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div>
            <h1>Welcome to PaperTrader</h1>
            <Link to="/signup">Create Account</Link>
            <br></br>
            <Link to="/login">Sign In</Link>
            </div>
        )
    }
}

export default Home;