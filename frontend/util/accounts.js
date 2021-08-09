export const createAcct = account => (
    $.ajax({
        url: 'api/accounts',
        method: 'POST',
        data: {account}
    })
)

export const editAcct = account => (
    $.ajax({
        url: `/api/accounts/${account.id}`,
        method: 'PATCH',
        data: {account}
    })
);

export const deleteAcct = acctId => (
    $.ajax({
        url: `/api/accounts/${acctId}`,
        method: 'DELETE'
    })
);

export const fetchAcctsForUser = (userId) => (
    $.ajax({
        url: `/api/accounts/`,
        method: 'GET',
        data: { userId }
    })
);