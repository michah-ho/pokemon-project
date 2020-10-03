import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function Header(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Pokemon Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
    );
}

export default Header;