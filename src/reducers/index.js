import { combineReducers } from 'redux'
import { actions, initState } from './actions'

const todos = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state
        case 'TOGGLE_TODO':
            return state
        default:
            return state
    }
}

const account = (state = initState, action) => {
    switch (action.type) {
        case 'USERNAME':
            return state.userName
        case 'USERID':
            return state.userId
        default:
            return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default combineReducers({
    account,
    todos,
    visibilityFilter
})