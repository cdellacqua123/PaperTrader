export const rememberTrade = trade => (
    $.ajax({
        url: 'api/trades',
        method: 'POST',
        data: { trade }
    })
);

export const findAllTrades = acctId => (
    $.ajax({
        url: `api/trades/${acctId}`,
        method: 'GET',
        data: { acctId }
    })
);