import React from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";

class AccountEdit extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.searchAccount = this.searchAccount.bind(this)
        this.changeAccount = this.changeAccount.bind(this)
        this.deleteCheck = this.deleteCheck.bind(this)
        this.deleteCancel = this.deleteCancel.bind(this)
        this.deleteAcct = this.deleteAcct.bind(this)
        // this.deleteAcct = this.deleteAcct.bind(this)
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
            this.setState({ 'deleteSuccess': false })

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
            // Success on edit render needed
        } else if (!parseInt(this.state.acctToEditBal)){
            console.log('Enter a correct Balance')
        } else {
            console.log('Please make an account name that doesnt match another account name')
        }
    }

    deleteCheck(e) {
        e.preventDefault();
        this.setState({'acctToDeleteId': this.state.acctToEditId})
        this.setState({ 'acctToDeleteName': this.state.acctToEditName })
    }

    deleteAcct(e) {
        e.preventDefault();
        this.props.deleteAcct(this.state.acctToDeleteId)
        this.setState({'acctToDeleteId': false})
        this.setState({ 'acctToDeleteName': false })
        this.setState({'deleteSuccess': true})
        this.setState({'acctToEditId': false})
    }

    deleteCancel(e) {
        e.preventDefault();
        this.setState({ 'acctToDeleteId': false })
        this.setState({ 'acctToDeleteName': false })
    }

    deleteSuccessRender() {
        if (this.state && this.state.deleteSuccess) {
            return(
                <h1>Account successfully deleted</h1>
            )
        }
    }

    deleteCheckRender() {
        if (this.state && this.state.acctToDeleteName) {
            return (
                <div>
                    <h1>Are you sure you want to delete account '{this.state.acctToDeleteName}'?</h1>
                    <button onClick={this.deleteAcct}>Yes</button>
                    <button onClick={this.deleteCancel}>No</button>
                </div>
            )
        }
    }

    renderEdit() {
        if (this.state && this.state.acctToEditId) {
            return (
                <div className='edit-acct-container'>
                    <h1>Edit Account Nickname</h1>
                    <input
                        className='edit-acct-name-input'
                        type='text'
                        value={this.state.acctToEditName}
                        onChange={this.handleInput('acctToEditName')}
                    />
                    <h1 className='edit-bal-h1'>Edit Account Balance</h1>
                    <input
                        className='edit-acct-bal-input'
                        type="text"
                        value={this.state.acctToEditBal}
                        onChange={this.handleInput('acctToEditBal')}
                    />
                    <br></br>
                    <button onClick={this.changeAccount} className='submit-edit'>
                        Submit Changes
                    </button>
                    <br></br>
                    <button onClick={this.deleteCheck} className='delete-acct'>
                        Delete Account
                    </button>
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
                <Header/>
                <button className='logout' onClick={this.handleLogout}>Logout
                </button>
                {/* <Sidebar/> */}
                <h1 className='edit-acct-header'>Edit An Account</h1>
                <div className='select-n-button-edit'>
                <select className="select-acct-edit" onChange={this.handleInput('selectedAcct')}>
                    <option> </option>
                    {accounts.map(account => (
                        <option >{account.account_name}</option>
                    ))}
                </select>
                <button className="search-acct-edit" onClick={this.searchAccount}>
                    Select Account
                </button>
                </div>
                <div>{this.renderEdit()}</div>
                <div>{this.deleteCheckRender()}</div>
                <div>{this.deleteSuccessRender()}</div>
            </div>
        )
    }
}

export default AccountEdit;