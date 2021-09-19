import React from 'react';
import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Navigation = () => <>
    <Navbar bg={'warning'} expand="md">
        <Container>
            <Navbar.Brand><Link to="/">VCRT</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">About VCRT</Nav.Link>
                    <Nav.Link><Link to="/schedule">VCRT Cup</Link></Nav.Link>
                    <NavDropdown title="Results" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#cup-results-a">Cat A</NavDropdown.Item>
                        <NavDropdown.Item href="#cup-results-b">Cat B</NavDropdown.Item>
                        <NavDropdown.Item href="#cup-results-c">Cat C</NavDropdown.Item>
                        <NavDropdown.Item href="#cup-results-D">Cat D</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#cup-results">Results</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
