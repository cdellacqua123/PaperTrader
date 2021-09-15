import React from 'react';

class PositionRender extends React.Component {
    render() {
        const { ticker, shares, price } = this.props
        if (ticker, shares, price) {
            return (
                <tbody>
                    <tr>
                        <td className='pos-table-data'>{ticker}</td>
                        <td className='pos-table-data'>{shares}</td>
                        <td className='pos-table-data'>{price}</td>
                    </tr>
                </tbody>
            )
        } else {
            return(null)
        }
    }
}

export default PositionRender;