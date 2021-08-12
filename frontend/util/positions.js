export const placeTrade = position => (
    $.ajax({
        url: 'api/positions',
        method: 'POST',
        data: {position}
    })
);