import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";

class NavBar extends Component {

    render(){
        return(
          
            <Navbar expand="lg" variant="light" bg="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#">NavBar</Navbar.Brand>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/">Home</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/newPost">New Post</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/postDetail">Post Detail</Link></NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>


            
        );
    }

}

export default NavBar