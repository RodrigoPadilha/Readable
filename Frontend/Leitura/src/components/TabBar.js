import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

class TabBar extends Component {

    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Projeto Reads</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Lista de Posts</Nav.Link>
                <Nav.Link as={Link} to="/newPost">Novo Post</Nav.Link>                
              </Nav>                          
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TabBar