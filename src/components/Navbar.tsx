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
                    <Nav.Link><Link to="/schedule">VCRT Cup Schedule</Link></Nav.Link>
                    <NavDropdown title="Results" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#cup-results-a"><Link to="/results-a">Cat A</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#cup-results-b"><Link to="/results-b">Cat B</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#cup-results-c"><Link to="/results-c">Cat C</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#cup-results-d"><Link to="/results-d">Cat D</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
