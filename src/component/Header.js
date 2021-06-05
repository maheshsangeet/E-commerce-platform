import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa';   


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">WAW</Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link href="#cart">
                        <FaShoppingCart />Cart
                    </Nav.Link>
                    <Nav.Link href="#login">
                        <FaUser />Login
                    </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
