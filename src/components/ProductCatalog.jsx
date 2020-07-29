import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

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
            <div className="row home4 h-auto">
                <div className="container-fluid mx-2 my-2">
                    <p className="text-light text-center">Copyright © 2020 LION-TR | All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
