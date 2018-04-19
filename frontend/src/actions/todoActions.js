import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = (description) => {
    const search = description ? `&description__regex=/${description}/` : '' 
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
    return {
        type: 'TODO_SEARCH',
        payload: request
    }
}

export const add = (description) => {
    const request = axios.post(URL, {description})
    return [
        {type: 'TODO_ADDED', payload:request},
    ]
}

export const clear = () => ({
    type: 'TODO_CLEAR'
})

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

