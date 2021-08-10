export const placeTrade = trade => (
    $.ajax({
        url: 'api/positions',
        method: 'POST',
        data: {trade}
    })
);