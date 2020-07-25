import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

// Components
import Header from './Header'
import Home from './Home'
import CatalogProduct from './CatalogProduct'
import ContactUs from './ContactUs'
import Admin from './Admin'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="header">
                    <Header/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/catalog-product" exact component={CatalogProduct}/>
                    <Route path="/contact-us" exact component={ContactUs}/>
                    <Route path="/admin" exact component={Admin}/>
                </div>
            </BrowserRouter>
        </div>
    )
}