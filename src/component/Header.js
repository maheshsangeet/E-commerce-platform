import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <Link style={{textDecoration: 'none',color:'white'}} to="/">
                            WAW
                        </Link>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link href="#cart">
                        <FaShoppingCart />
                        <Link style={{textDecoration: 'none',color:'rgb(194, 188, 181)'}} to="/cart">
                            Cart
                        </Link>
                    </Nav.Link>
                    <Nav.Link >
                        <FaUser />Login
                    </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
