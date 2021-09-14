import React from 'react';

class PositionRender extends React.Component {
    render() {
        const { ticker, shares, price } = this.props
        return (
            <tbody>
                <tr>
                    <td className='pos-table-data'>{ticker}</td>
                    <td className='pos-table-data'>{shares}</td>
                    <td className='pos-table-data'>{price}</td>
                </tr>
            </tbody>
        )
    }
}

export default PositionRender;