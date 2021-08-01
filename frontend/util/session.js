export const login = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/user',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);
