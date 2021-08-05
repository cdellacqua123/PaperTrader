import React from 'react';

class AccountForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.account
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.submitAcct(this.state)
    };

    render(){
        return(
                <form>
                <h1>Nickname:</h1>
                <input onChange={this.handleInput('account_name')}/>
                <h1>Balance:</h1>
                <input onChange={this.handleInput('balance')}/>
                Shorting?:
                <input onChange={this.handleInput('shorting')}/>
                <button onClick={this.handleSubmit}/>
                </form>
        )
    }
};

export default AccountForm;