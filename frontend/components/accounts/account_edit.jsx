import React from "react";

class AccountEdit extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.searchAccount = this.searchAccount.bind(this)
        this.changeAccount = this.changeAccount.bind(this)
    }

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id)
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    };

    searchAccount(e) {
        e.preventDefault();
        if (this.state && this.state.selectedAcct) {
            const stateAcct = this.state.selectedAcct
            let account = this.props.accounts.find(account => account.account_name === stateAcct)
            this.setState({ 'noAcct': false })
            this.setState({ ['acctToEditId']: account.id })
            this.setState({ ['acctToEditName']: account.account_name })
            this.setState({ ['acctToEditBal']: account.balance })

        } else {
            this.setState({ 'noAcct': true })
        }
    };

    changeAccount(e) {
        e.preventDefault();
        let check = this.props.accounts.find(account => account.account_name === this.state.acctToEditName)
        if ((parseInt(this.state.acctToEditBal) && ((!check) || (check.id === this.state.acctToEditId)))) {
            this.props.editAcct({
                account_name: this.state.acctToEditName,
                balance: this.state.acctToEditBal,
                id: this.state.acctToEditId
            })
            // Success on change needed
        } else if (!parseInt(this.state.acctToEditBal)){
            console.log('Enter a correct Balance')
        } else {
            console.log('Please make an account name that doesnt match another account name')
        }
        
    }

    renderEdit() {
        if (this.state && this.state.acctToEditId) {
            return (
                <div>
                    <h1>Edit Account Nickname</h1>
                    <input
                        type='text'
                        value={this.state.acctToEditName}
                        onChange={this.handleInput('acctToEditName')}
                    />
                    <h1>Edit Account Balance</h1>
                    <input
                        type="text"
                        value={this.state.acctToEditBal}
                        onChange={this.handleInput('acctToEditBal')}
                    />
                    <button onClick={this.changeAccount}>Submit Changes</button>
                    <button>Delete Account</button>
                </div>
            )
        }
    }

    render() {
        if (!this.props.accounts) {
            return null
        }
        let {accounts} = this.props
        console.log(this.state)
        return(
            <div>
                <select className="select-acct-show" onChange={this.handleInput('selectedAcct')}>
                    <option> </option>
                    {accounts.map(account => (
                        <option >{account.account_name}</option>
                    ))}
                </select>
                <button className="search-acct-edit" onClick={this.searchAccount}>
                    Select Account
                </button>
                <div>{this.renderEdit()}</div>
            </div>
        )
    }
}

export default AccountEdit;