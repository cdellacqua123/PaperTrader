export const rememberTrade = trade => (
    $.ajax({
        url: 'api/trades',
        method: 'POST',
        data: { trade }
    })
);