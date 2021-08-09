export const fetchUser = userId => (
    $.ajax({
        url: '/url/users',
        data: { userId }
    })
)