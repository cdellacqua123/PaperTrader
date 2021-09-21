import React from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import Footer from "../footer/footer";

class AccountEdit extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.searchAccount = this.searchAccount.bind(this)
        this.changeAccount = this.changeAccount.bind(this)
        this.deleteCheck = this.deleteCheck.bind(this)
        this.deleteCancel = this.deleteCancel.bind(this)
        this.deleteAcct = this.deleteAcct.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id)
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    };

    handleLogout(e) {
        e.preventDefault();
        this.props.logout(this.state)
        this.props.history.push('/');
    }

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
            this.setState({ 'editSuccess': false })
            this.setState({ 'badName': false })
            this.setState({ 'badBal': false })

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
            this.setState({'editSuccess': true})
        } else if (!parseInt(this.state.acctToEditBal)){
            this.setState({'badBal': true})
            this.setState({ 'badName': false })
            this.setState({ 'editSuccess': false })
        } else {
            this.setState({'badName': true})
            this.setState({ 'badBal': false })
            this.setState({ 'editSuccess': false })
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
        this.setState({ 'badBal': false })
        this.setState({ 'editSuccess': false })
        this.setState({ 'badName': false })
    }

    deleteCancel(e) {
        e.preventDefault();
        this.setState({ 'acctToDeleteId': false })
        this.setState({ 'acctToDeleteName': false })
    }

    deleteSuccessRender() {
        if (this.state && this.state.deleteSuccess) {
            return(
                <h1 className='delete-success'>Account Deleted</h1>
            )
        }
    }

    editSuccessRender() {
        if (this.state && this.state.editSuccess) {
            return (
                <div className='edit-success-container'>
                <h1 className='edit-success'>Account Update Successful</h1>
                </div>
            )
        }
    }

    deleteCheckRender() {
        if (this.state && this.state.acctToDeleteName) {
            return (
                <div className='delete-acct-check'>
                    <h1>Are you sure you want to delete account '{this.state.acctToDeleteName}' ?</h1>
                    <button className='yes-del-acct' onClick={this.deleteAcct}>
                        Delete
                    </button>
                    <button className='no-del-acct' onClick={this.deleteCancel}>
                        Cancel
                    </button>
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

    badInputRender() {
        if (this.state && this.state.badName) {
            return(<h1 className='edit-acct-name-err'>
                Please Choose An Account Name That's Different From Your Other Account Names
                </h1>)
        } else if (this.state && this.state.badBal) {
            return (<h1 className='edit-acct-bal-err'>
                Please Enter A Numeric Value For Balance
                </h1>)
        }
    }

    render() {
        if (!this.props.accounts) {
            return null
        }
        let {accounts} = this.props
        return(
            <div>
                <Header/>
                <button className='logout' onClick={this.handleLogout}>Logout
                </button>
                <Sidebar/>
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
                <div>{this.editSuccessRender()}</div>
                <div>{this.badInputRender()}</div>
                <div>{this.deleteSuccessRender()}</div>
                </div>
                <div>{this.renderEdit()}</div>
                <div>{this.deleteCheckRender()}</div>
                <Footer/>
            </div>
        )
    }
}

export default AccountEdit;