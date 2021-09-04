import React from 'react';

class TradeHistory extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchAcctsForUser(this.props.currentUser.id)
            .then(response =>
                Object.values(response.accounts).forEach(account => {
                    if (account.trade_hist.length > 0) {
                        this.props.findAllTrades(account.id);
                    }
                }
            )
        )
    };

    render() {
        // console.log(this.props)
        return(
            <h1>Hello</h1>
        )
    }
};

export default TradeHistory;