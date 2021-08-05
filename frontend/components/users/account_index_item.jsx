import React from 'react';
import { Link } from 'react-router-dom';

class AccountIndexItem extends React.Component {
    render() {
        const {account_name, balance, equities} = this.props
        return(
            <li>
                <p>{account_name}</p>
                <p>{balance}</p>
                <p>{equities}</p>
            </li>
        )
    }
}

export default AccountIndexItem;