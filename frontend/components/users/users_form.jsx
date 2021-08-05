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
        console.log(this.props)
        return(
            <div>
            <h1 className='user-header'>Paper Trader</h1>
                {/* {this.props.currentUser.username} */}
            <h2 className='welcome'>Welcome, User!</h2>
            <br></br>
            <button onClick={this.handleSubmit}><Link to='/'>Logout</Link></button>
            <Link to='account/create'>Create New Account</Link>
            </div>
        )
    }
}
export default UsersForm;