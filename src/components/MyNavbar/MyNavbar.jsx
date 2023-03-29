import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" >
                <Container>
                    <Navbar.Brand href="#home" className='ms-lg-5'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto">
                            <Nav.Link href={`/`}>Home</Nav.Link>
                            <Nav.Link href={`/task1`}>Task1</Nav.Link>
                            <Nav.Link href="#link">About us</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
