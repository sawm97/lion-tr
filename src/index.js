import React from 'react'
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import store from './config/redux'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    // <Provider store={store}>
        <App/>,
    // </Provider>,
    document.getElementById('root')
)