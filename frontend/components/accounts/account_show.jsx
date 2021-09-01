import React from 'react';

class AccountShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this);
        this.searchAccount = this.searchAccount.bind(this);
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    searchAccount(e) {
        e.preventDefault();
        
        const stateAcct = this.state.selectedAcct
        let account = this.props.accounts.find(account => account.account_name === stateAcct)
        this.props.positions.forEach( position => {
            if (position.acct_id === account.id) {
                console.log(position)
            }
        })
    };

    componentDidMount(){
        this.props.fetchAcctsForUser(this.props.currentUser.id)
            .then(response =>   
                Object.values(response.accounts).forEach(account => 
                {
                    if (account.equities.length > 0) {
                        this.props.findPositions(account.id);
                    }
                }
            )
        )
    };

    render(){
        if (!this.props.accounts) {
            return null
        }
        let {accounts} = this.props
        return(
            <div>
                <label className="select-acct-head">Please Select an Account</label>
                <select className="select-acct" onChange={this.handleInput('selectedAcct')}>
                    <option> </option>
                    {accounts.map(account => (
                        <option >{account.account_name}</option>
                    ))}
                </select>
                <button className="search-account" onClick={this.searchAccount}>
                    Select Account
                </button>
            </div>
        )
    }
};

export default AccountShow;
