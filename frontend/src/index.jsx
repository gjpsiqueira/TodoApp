import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'

import App from './main/app'

const store = applyMiddleware(thunk,multi,promise)(createStore)(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))