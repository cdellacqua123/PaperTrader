import React from 'react';
import { Link } from 'react-router-dom';

class UsersForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout(this.state)
    }

    render() {
        return(
            <div>
            <h1 className='pt-header'>Paper Trader</h1>    
            <h2 className='welcome'>Welcome, {this.props.currentUser.username}!</h2>
            <br></br>
            <button className='logout' onClick={this.handleSubmit}>
                <Link className='logout-txt' to='/'>Logout</Link>
            </button>
            <Link to='account/create'>Create New Account</Link>
            </div>
        )
    }
}
export default UsersForm;