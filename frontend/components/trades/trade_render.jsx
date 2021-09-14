import React from 'react';

class TradeRender extends React.Component {
    render() {
        const { action, ticker, price, quantity, amount } = this.props
        return (
            <tbody>
                <tr>
                    <td className='pos-table-data-hist'>{action}</td>
                    <td className='pos-table-data-hist'>{ticker}</td>
                    <td className='pos-table-data-hist'>{price}</td>
                    <td className='pos-table-data-hist'>{quantity}</td>
                    <td className='pos-table-data-hist'>{amount}</td>
                </tr>
            </tbody>
        )
    }
}

export default TradeRender;