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
                    <Link className={'nav-link'} to="/schedule">VCRT Cup Schedule</Link>
                    <NavDropdown title="Results" id="basic-nav-dropdown">
                        <Link className={'dropdown-item'} to="/results-a">Cat A</Link>
                        <Link className={'dropdown-item'} to="/results-b">Cat B</Link>
                        <Link className={'dropdown-item'} to="/results-c">Cat C</Link>
                        <Link className={'dropdown-item'} to="/results-d">Cat D</Link>
                    </NavDropdown>
                   <Link className={'nav-link'} to="/rules">Rules</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
