import React from 'react';

class AccountIndexItem extends React.Component {
    render() {
        const {account_name, balance, equities="None"} = this.props
        return(
            <tr>
                <td className="table-data">{account_name}</td>
                <td className="table-data">${balance}</td>
                <td className="table-data">{equities}</td>
            </tr>
        )
    }
}

export default AccountIndexItem;