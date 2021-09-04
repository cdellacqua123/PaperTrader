export const placeTrade = position => (
    $.ajax({
        url: 'api/positions',
        method: 'POST',
        data: {position}
    })
);

export const findPositions = acctId => (
    $.ajax({
        url: `api/positions/${acctId}`,
        method: 'GET',
        data: {acctId}
    })
)