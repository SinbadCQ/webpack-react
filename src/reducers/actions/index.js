export const actions = [
    {
        type: 'ADD_TODO',
        text: 123
    },
    {
        type: 'REMOVE_TODO',
        text: 456
    }
]

export const initState = {
    userName: localStorage.getItem('userId'),
    userId: '666999'
}
