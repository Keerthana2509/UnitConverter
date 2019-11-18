import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="TextColor header_fixed">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>Unit Converter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">Length</Nav.Link>
                            <Nav.Link href="#home">Temperature</Nav.Link>
                            <Nav.Link href="#home">Weight</Nav.Link>
                            <Nav.Link href="#home">Time</Nav.Link> */}
                            <Link to="/" className="nav-link">Home</Link> 
                            <Link to="/length" className="nav-link">Length</Link>
                            <Link to="/temp" className="nav-link">Temperature</Link>
                            <Link to="/weight" className="nav-link">Weight</Link>
                            <Link to="/time" className="nav-link">Time</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>  
        );
    }
}
export default Header;