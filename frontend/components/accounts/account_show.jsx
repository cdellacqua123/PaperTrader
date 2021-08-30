import React from 'react';

class AccountShow extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount(){
        this.props.fetchAcctsForUser(this.props.currentUser.id)
    }
    render(){
        
        if (!this.props.accounts) {
            return null
        }
        let {accounts} = this.props
        console.log(accounts)
        return(
            <h1>hello</h1>
        )
    }
};

export default AccountShow;