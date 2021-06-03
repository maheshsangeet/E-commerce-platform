import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap'


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">WAW</Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">
                        <i class="fa fa-shopping-cart"></i> Cart</Nav.Link>
                    <Nav.Link href="#features">
                        <i className="fa fa-user"></i>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
