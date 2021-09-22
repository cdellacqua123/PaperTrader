import React from 'react';

class AccountIndexItem extends React.Component {
    render() {
        const {account_name, balance, equities, id} = this.props
        return(
            <tbody>
                <tr>
                    <td className="table-data">{account_name}</td>
                    <td className="table-data">${balance}</td>
                    <td className="table-data">{equities.length}</td>
                </tr>
            </tbody>
        )
    }
}

export default AccountIndexItem;