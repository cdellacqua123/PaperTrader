import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';

class AccountForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.account
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id)
    }

    handleSubmit(e){
        e.preventDefault();
        if ((!this.state) || (!this.state.account_name) || (!this.state.balance)) {
            this.setState({ 'noValues': true })
            this.setState({ 'badBal': false })
            this.setState({ 'badName': false })
        } else {
            let check = this.props.accounts.find(account => account.account_name === this.state.account_name)
            if ((!check) && (parseInt(this.state.balance))) {
                this.props.submitAcct({
                    account_name: this.state.account_name,
                    balance: this.state.balance,
                    // shorting_allowed: this.state.shorting_allowed,
                    user_id: this.state.user_id
                });
                this.props.history.push("/users/show");
            } else if (check) {
                this.setState({'badName': true})
                this.setState({'badBal': false})
                this.setState({ 'noValues': false })
            } else {
                this.setState({ 'badName': false })
                this.setState({ 'badBal': true })
                this.setState({ 'noValues': false })
            }
        }
    };

    cancel = () => {
        this.props.history.push("/users/show");
    }

    homePage = () => {
        this.props.history.push("/");
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout(this.state)
        this.props.history.push('/');
    }

    badInputRender() {
        if (this.state && this.state.badName) {
            return (<h1 className='create-acct-name-err'>
                You Already Have An Account With That Name, Please Select Another
            </h1>)
        } else if (this.state && this.state.badBal) {
            return (<h1 className='create-acct-bal-err'>
                Please Enter A Numeric Value For Balance
            </h1>)
        } else if (this.state && this.state.noValues) {
            return (<h1 className='create-acct-no-val'>
                Please Enter A Value In All Fields
            </h1>)
        }
    }
    
    render(){
        return(
            <div>
                <Header/>
                <button className='logout' onClick={this.handleLogout}>Logout
                </button>
                <Sidebar/>
                <div className='new-acct-container'>
                <h1 className="new-trade-acct-header">Create a Trading Account</h1>
                <div>{this.badInputRender()}</div>
                <form>
                <h1 className="new-trade-acct-nickname-head">Nickname:</h1><br></br>
                    <input className="new-trade-acct-nickname-input" onChange={this.handleInput('account_name')}/>
                    <br></br>
                <h1 className="new-trade-acct-bal-head">Balance:</h1><br></br>
                    <input className="new-trade-acct-bal-input" onChange={this.handleInput('balance')}/>
                    <br></br>
                {/* Shorting?: */}
                {/* <input onChange={this.handleInput('shorting_allowed')}/> */}
                {/* <button className="cancel-button" onClick={this.cancel}>
                    Cancel
                </button> */}
                <br></br>
                    <button className="create-button" onClick={this.handleSubmit}>
                        Create Account
                    </button>
                {/* <br></br> */}
                </form>
                </div>
                <Footer getQuote={this.props.getQuote}/>
            </div>
        )
    }
};

export default AccountForm;