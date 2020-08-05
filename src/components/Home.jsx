import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logoutAction} from '../config/redux/actions'
import Footer from './Footer'
import './style.css'


export default function Home() {
    const autoLogout = useDispatch()
    
    useEffect(() => {
        autoLogout(logoutAction())
    })

    return (
        <div className="container mw-100 vh-100">
            <div className="row jumbotron mb-0 h-100">
                <div className="container float-right column">
                    <h1 className="display-5 fa-font-awesome font-weight-bold">JUAL KURSI MEJA KANTOR</h1>
                    <h1 className="lead font-weight-bold text-secondary">HUBUNGI : 0123456789</h1>
                    <Link to="/catalog-product">
                        <button className="btn-pc btn-pc-color btn-lg" >Catalog Product</button>
                    </Link>
                </div>
            </div>
            <div className="row home1 h-auto">
                <div className="container mx-auto my-5">
                    <div className="row">
                        <div className="container">
                            <h1 className="text-center">Selamat Datang</h1>
                            <br/>
                            <p className="text-center lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique cupiditate, tempora ratione explicabo possimus amet?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row home2 flex-wrap h-auto">
                <div className="container mx-auto my-5">
                    <div className="row">
                        <div className="container">
                            <h1 className="text-center">Our Brand</h1>
                            <br/>
                            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eaque?</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
