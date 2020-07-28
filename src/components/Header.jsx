import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className="container-fluid mw-100">
            <Navbar className="bg-dark fixed-top" dark expand="md">
                <NavbarBrand href="/" className="font-weight-bolder">LION-TR</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="bg-transparant ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/" className="text-light">Beranda</NavLink>
                        </NavItem>    
                        <NavItem>
                            <NavLink href="/catalog-product" className="text-light">Katalog Produk</NavLink>
                        </NavItem>    
                        <NavItem>
                            <NavLink href="/contact-us" className="text-light">Kontak Kami</NavLink>
                        </NavItem>    
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}