import React from 'react';

class UsersForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
    }

    render() {
        return(
            <div>
            <h1>Welcome!</h1>
            <br></br>
            <button onClick={this.handleSubmit}><Link to='/'>Logout</Link></button>
            </div>
        )
    }
}
export default UsersForm;