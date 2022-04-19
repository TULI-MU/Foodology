import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../src/images/logo_prev_ui.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h2>Foodology</h2>
                        <img height={65} src={logo} alt="" />
                    </Navbar.Brand>
                    <h2>Foodology</h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#home">Home</Nav.Link>
                            <Nav.Link href="home#programs">Programs</Nav.Link>
                            <Nav.Link href="home#menu">Menu</Nav.Link>
                            <Nav.Link href="blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About Us</Nav.Link>


                            {
                                user ?
                                    <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;