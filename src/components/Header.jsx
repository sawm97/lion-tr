import React from 'react'
import {Link} from 'react-router-dom'
import {Nav, NavLink, NavItem, Navbar, NavbarBrand} from 'reactstrap'


export default function Header() {
    return (
        <div className="container-fluid mx-auto">
            <Navbar className="bg-white fixed-top" light expand="md">
                <NavbarBrand tag={Link} to="/" className=" font-weight-bolder">LION-TR</NavbarBrand>
                <Nav className="bg-transparant ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Beranda</NavLink>
                    </NavItem>    
                    <NavItem>
                        <NavLink href="/catalog-product">Katalog Produk</NavLink>
                    </NavItem>    
                    <NavItem>
                        <NavLink href="/contact-us">Kontak Kami</NavLink>
                    </NavItem>    
                </Nav>
                {/* <Nav tag={Link} to="/katalog-product" className=" text-dark ml-5 font-weight-bold h5 text-decoration-none">Katalog Produk</Nav> */}
                {/* <Nav tag={Link} to="/kontak-kami" className=" text-dark ml-5 font-weight-bold h5 text-decoration-none">Kontak Kami</Nav> */}
            </Navbar>
        </div>
    )
}