import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
import { HashRouter } from 'react-router-dom'


export default props => (
    <HashRouter>
        <div className="container">
            <Menu />
            <Routes />
        </div>
    </HashRouter>
)