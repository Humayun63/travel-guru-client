import React from 'react';
import logo from '../../assets/logo.png'
import logo1 from '../../assets/logo2.png'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation()
    const isTrue = location.pathname === '/' || location.pathname === '/booking';
    return (
        <Navbar expand="lg" className='py-4'>
            <Container fluid>
                <Navbar.Brand>
                    <Link to='/'><img src={isTrue ? logo1 : logo} style={{ width: '120px' }} /></Link>
                </Navbar.Brand>
                <Form className="w-25">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        className="bg-light bg-opacity-10 mx-5 text-dark fw-bold"
                    />
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 d-flex align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className={`text-decoration-none mx-2 ${isTrue ? 'text-light' : 'text-dark'}`} to='/booking'>News</Link>
                        <Link className={`text-decoration-none mx-2 ${isTrue ? 'text-light' : 'text-dark'}`} to='/destination'>Destination</Link>
                        <Link className={`text-decoration-none mx-2 ${isTrue ? 'text-light' : 'text-dark'}`} to='/blog'>Blog</Link>
                        <Link className={`text-decoration-none mx-2 ${isTrue ? 'text-light' : 'text-dark'}`} to='/contact'>Contact</Link>
                        <Link className={`text-decoration-none mx-2 ${isTrue ? 'text-light' : 'text-dark'}`} to='/login'>
                            <Button variant="warning">Login</Button>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;