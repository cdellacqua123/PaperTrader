export const placeTrade = position => (
    $.ajax({
        url: 'api/positions',
        method: 'POST',
        data: {position}
    })
);

export const findPosition = positionId => (
    $.ajax({
        url: 'api/positions',
        method: 'GET',
        data: {positionId}
    })
)