import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Dental Surgeon </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/about">About</Nav.Link>
                        {user ?
                            <button className='btn btn-info text-dark text-decoration-none' onClick={handleLogout}>Log Out</button>
                            :
                            <Nav.Link className='btn btn-info' href='/login'>
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;