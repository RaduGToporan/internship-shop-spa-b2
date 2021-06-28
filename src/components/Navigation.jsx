import React from 'react'
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Navbar, Nav} from'react-bootstrap'

function Navigation() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Item>
            <NavLink className="d-inline p-2 bg-dark text-white" to "/">
                Home
            </NavLink>
            </Nav.Item>
            <Nav.Link className="d-inline p-2 bg-dark text-white" to "/category">
                Category
            </Nav.Link>
            <Nav.Link className="d-inline p-2 bg-dark text-white" to "/product">
                Product
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation