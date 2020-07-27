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
            <Navbar style={{backgroundColor: "#3B3B40"}} className="fixed-top" dark expand="md">
                <NavbarBrand href="/" style={{color: "#F2D027"}} className="font-weight-bolder" >LION-TR</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="bg-transparant ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/" style={{color: "#F2D027"}}>Beranda</NavLink>
                        </NavItem>    
                        <NavItem>
                            <NavLink href="/catalog-product" style={{color: "#F2D027"}}>Katalog Produk</NavLink>
                        </NavItem>    
                        <NavItem>
                            <NavLink href="/contact-us" style={{color: "#F2D027"}}>Kontak Kami</NavLink>
                        </NavItem>    
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}