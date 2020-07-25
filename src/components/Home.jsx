import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function Home() {
    return (
        <div>
            <div className="jumbotron">
                <div className="column">
                    <h1 className="display-5 fa-font-awesome font-weight-bold">JUAL KURSI MEJA KANTOR</h1>
                    <h1 className="lead font-weight-bold text-secondary">HUBUNGI : 0123456789</h1>
                    <Link to="/catalog-product">
                        <button className="btn btn-info btn-lg" >Catalog Product</button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="container">
                    <h1 className="display-5">Selamat Datang</h1>
                    <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique cupiditate, tempora ratione explicabo possimus amet?</p>
                </div>
            </div>
            <div>
                <div className="container">
                    <h1 class="display-5">Our Brand</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eaque?</p>
                </div>
            </div>
            <div>
                <div className="container">
                    <h1 class="display-5">Footer</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eaque?</p>
                </div>
            </div>
        </div>
    )
}
