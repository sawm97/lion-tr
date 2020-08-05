import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logoutAction} from '../config/redux/actions'
import Footer from './Footer'
import './style.css'

export default function ContactUs() {
    const autoLogout = useDispatch()
    
    useEffect(() => {
        autoLogout(logoutAction())
    })

    return (
        <div className="container mw-100 vh-100">
            <div className="row cover-cu mt-5 h-50">
                <div className="container mt-10">
                    <h1 className="font-weight-bolder text-dark">HUBUNGI KAMI</h1>
                </div>
            </div>
            <div className="row home1 h-auto">
                <div className="container-fluid mx-auto my-5">
                    <div className="row">
                        <div className="col home2 rounded mx-3 h-auto p-2">
                            <h3 className="text-center">Hubungi Kami</h3>
                            <div className="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Nama" aria-label="Nama"/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Alamat Email" aria-label="Alamat Email"/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Nomor Telepon" aria-label="Nomor Telepon"/>
                            </div>
                            <div class="input-group mb-3">
                                <textarea class="form-control" placeholder="Pesan" aria-label="Pesan"></textarea>
                            </div>
                            <Link to="/catalog-product">
                                <button className="btn-pc btn-pc-color btn-sm">Kirim</button>
                            </Link>
                        </div>
                        <div className="col home2 rounded mx-3 h-auto p-2">
                            <h3 className="text-center">Lokasi Kami</h3>
                            <br/>
                            <iframe title="Lion-TR Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.969623442017!2d106.9900241!3d-6.1652412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15898fadc067eab7!2sPT%20Tali%20Rejeki%20Distributor%20Rockwool%2C%20Glasswool%2C%20Material%20Peredam%20Suara%2C%20dan%20Material%20Insulation!5e0!3m2!1sid!2sid!4v1596281472963!5m2!1sid!2sid" 
                            height="450" className="container-fluid border-secondary p-2 rounded" frameboallowfullscreen="" aria-hidden="false"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
