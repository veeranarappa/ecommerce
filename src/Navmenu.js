import React from 'react'
import {Navbar, Container, Nav, Badge} from 'react-bootstrap'
import {Link } from 'react-router-dom';
import {Row, Col, Button, Form} from 'react-bootstrap'

function Navmenu(){
    return(
        <div>
            {/* <Navbar bg="primary">
            <Row>
<Col xs={8}>
Veera
</Col>
<Col xs={4}>
    Abcd
</Col>
</Row>
</Navbar> */}

    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> Logo Here </Navbar.Brand>
    <Nav className="me-auto menu">
    <Link to="/Cart"> <i class="fa fa-shopping-cart"></i> <Badge bg="secondary">0</Badge></Link> 
     
       <Link to="/">Home</Link> 
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact Us </Link> 

      <Link to="/Login">Login </Link>
      <Link to="/Register"> Register </Link> 
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
 
export default Navmenu;

