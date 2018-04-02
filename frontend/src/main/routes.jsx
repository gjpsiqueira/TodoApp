import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Switch>
        <Route exact path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Switch>
)