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
            <h1>Welcome {this.props.currentUser.username}</h1>
            <br></br>
            <button onClick={this.handleSubmit}><Link to='/'>Logout</Link></button>
            </div>
        )
    }
}
export default UsersForm;