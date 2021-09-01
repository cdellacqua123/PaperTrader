import React from 'react';

class PositionRender extends React.Component {
    render() {
        const {ticker, shares, price} = this.props
        return (
            <tr>
                <td>{ticker}</td>
                <td>{shares}</td>
                <td>{price}</td>
            </tr>
        )
    }
}

export default PositionRender;