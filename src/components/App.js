import React, {useState, useEffect} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {loginAction} from '../config/redux/actions'
import './style.css'

// Components
import Header from './Header'
import Home from './Home'
import ProductCatalog from './ProductCatalog'
import ContactUs from './ContactUs'
import Login from './Admin/Login'

export default function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const admin = JSON.parse(localStorage.getItem('admin'))

        if (admin) dispatch(loginAction())
        setLoading(false)
    }, [dispatch])
    
    return loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100 home3">
            <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ) : (
        <div>
            <BrowserRouter>
                <div className="header">
                    <Header/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/product-catalog" exact component={ProductCatalog}/>
                    <Route path="/contact-us" exact component={ContactUs}/>
                    <Route path="/admin" exact component={Login}/>
                </div>
            </BrowserRouter>
        </div>
    )
} 