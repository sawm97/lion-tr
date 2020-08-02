import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import './style.css'

export default function ProductCatalog() {
    return (
        <div className="container mw-100 vh-100">
            <div className="row cover-pc mt-5 h-50">
                <div className="container mt-10">
                    <h1 className="font-weight-bolder text-dark">KATALOG PRODUK</h1>
                </div>
            </div>
            <div className="row home1 h-50">
                <div className="container pc-ml my-5">
                    <div className="row">
                        <div className="container">
                            <h1 className="text-left font-weight-bold" style={{color: "#0D276B"}}>Produk 1</h1>
                            <br/>
                            <Link to="/catalog-product">
                                <button className="btn-pc btn-pc-color btn-lg">Product 1.pdf</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row home2 h-50">
                <div className="container pc-mr my-5">
                    <div className="row">
                        <div className="container">
                            <h1 className="text-right font-weight-bold" style={{color: "#0D276B"}}>Produk 2</h1>
                            <br/>
                            <Link to="/catalog-product">
                                <button className=" float-right btn-pc btn-pc-color btn-lg">Product 2.pdf</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row home1 h-50">
                <div className="container pc-ml my-5">
                    <div className="row">
                        <div className="container">
                            <h1 className="text-left font-weight-bold" style={{color: "#0D276B"}}>Produk 3</h1>
                            <br/>
                            <Link to="/catalog-product">
                                <button className="btn-pc btn-pc-color btn-lg">Product 3.pdf</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row home2 h-50">
                <div className="container pc-mr my-5">
                    <div className="row">
                        <div className="container">
                            <h1 className="text-right font-weight-bold" style={{color: "#0D276B"}}>Produk 4</h1>
                            <br/>
                            <Link to="/catalog-product">
                                <button className=" float-right btn-pc btn-pc-color btn-lg">Product 4.pdf</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
