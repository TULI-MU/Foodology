import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/images/logo_prev_ui.ico';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <h2>Foodology</h2>
                <div>
                    <Link to="/home">HOME</Link>
                    <Link to="/programs">PROGRAMS</Link>
                    <Link to="/menu">MENU</Link>
                    <Link to="/aboutus">ABOUT US</Link>
                    <Link to="/login">LOGIN</Link>
                </div>
            </nav>


        </div>
    );
};

export default Header;