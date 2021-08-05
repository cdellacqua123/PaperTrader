import React from 'react';

class AccountForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.acct
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitEvent(this.state)
    };

    update(field){
        return e =>this.setState({[field]: e.currentTarget.value})
    }
    render(){
        return(
                <div>
                    
                </div>
        )
    }
};

export default AccountForm;