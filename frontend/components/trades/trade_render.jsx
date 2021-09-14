import React from 'react';

class TradeRender extends React.Component {
    render() {
        const { action, ticker, price, quantity, amount } = this.props
        return (
            <tbody>
                <tr>
                    <td className='pos-table-data'>{action}</td>
                    <td className='pos-table-data'>{ticker}</td>
                    <td className='pos-table-data'>{price}</td>
                    <td className='pos-table-data'>{quantity}</td>
                    <td className='pos-table-data'>{amount}</td>
                </tr>
            </tbody>
        )
    }
}

export default TradeRender;