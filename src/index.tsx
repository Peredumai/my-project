import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/root/app'
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.scss'

import 'normalize.css/normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
)
