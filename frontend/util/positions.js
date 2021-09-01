export const placeTrade = position => (
    $.ajax({
        url: 'api/positions',
        method: 'POST',
        data: {position}
    })
);

export const findPositions = positionId => (
    $.ajax({
        url: `api/positions/${positionId}`,
        method: 'GET',
        data: {positionId}
    })
)