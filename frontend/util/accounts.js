export const createAcct = acct => (
    $.ajax({
        url: 'api/accounts',
        method: 'POST',
        data: {acct}
    })
)

export const editAcct = acct => (
    $.ajax({
        url: `/api/accounts/${acct.id}`,
        method: 'PATCH',
        data: {acct}
    })
);

export const deleteAcct = acctId => (
    $.ajax({
        url: `/api/accounts/${acctId}`,
        method: 'DELETE'
    })
)