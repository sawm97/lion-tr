import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function Home() {
    return (
        <div className="container mw-100 vh-100">
            <div className="row jumbotron mb-0 h-100">
                <div className="container float-right column">
                    <h1 className="display-5 fa-font-awesome font-weight-bold">JUAL KURSI MEJA KANTOR</h1>
                    <h1 className="lead font-weight-bold text-secondary">HUBUNGI : 0123456789</h1>
                    <Link to="/catalog-product">
                        <button className="btn btn-secondary btn-lg" >Catalog Product</button>
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
            <div className="row home3 h-auto">
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-sm mx-2 my-2">
                            <h3 className="text-left text-light">LION-TR</h3>
                            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptatum.</p>
                            <br/>
                            <h3 className="text-left text-light">JAM OPERASIONAL</h3>
                            <p className="text-light">
                                Senin-Jumat 
                                <br/> 
                                Pukul 08.00 - 17.00
                            </p>
                        </div>
                        <div className="col-sm mx-2 my-2">
                            <h3 className="text-left text-light">TELP : 08XX-XXXX-XXXX</h3>
                            <p className="text-light">
                                Fax : 021-XXXXXXXX
                                <br/>
                                Email : lion-tr@email.com
                            </p>
                            <br/>
                            <h3 className="text-left text-light">CONTACT PERSON</h3>
                            <p className="text-light">
                                Mobile & Whatsapp
                                <br/>
                                <ul className="text-left text-light list-unstyled">
                                    <li>Siti: 0813 8252 3722</li>
                                    <li>Ummi Sallama:  0821 1001 7925</li>
                                    <li>Kurnia: 0813 8480 8218 (WA Only)</li>
                                    <li>Bagyo:  0877 8918 6641</li>
                                    <li>Sari: 0813 1682 6959</li>
                                    <li>Adi Sudarmo: 0813 1002 9533</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col-sm mx-2 my-2">
                            <h3 className="text-left text-light">LIKE US ON FACEBOOK</h3>
                            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptatum.</p>
                            <h3 className="text-left text-light">LOKASI KAMI</h3>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, doloribus? Eius ea, accusantium, molestiae officiis harum placeat quae voluptatum aspernatur deleniti dolor non assumenda necessitatibus, quisquam consequatur neque ducimus beatae.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="jumbotron">
                <div className="container float-right column">
                    <h1 className="display-5 fa-font-awesome font-weight-bold">JUAL KURSI MEJA KANTOR</h1>
                    <h1 className="lead font-weight-bold text-secondary">HUBUNGI : 0123456789</h1>
                    <Link to="/catalog-product">
                        <button className="btn btn-secondary btn-lg" >Catalog Product</button>
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="col-10">
                    <h1 className="display-5">Selamat Datang</h1>
                    <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique cupiditate, tempora ratione explicabo possimus amet?</p>
                </div>
            </div>
            <div className="container">
                <div className="col-10">
                    <h1 className="display-5">Our Brand</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eaque?</p>
                </div>
            </div>
            <div className="container">
                <div className="col-10">
                    <h1 className="display-5">Footer</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eaque?</p>
                </div>
            </div> */}
        </div>
    )
}
