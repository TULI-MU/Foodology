import React from 'react';
import logo from '../../src/images/logo_prev_ui.ico';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='mt-5 footer'>
            <img src={logo} alt="" />
            <div className='display'>
                <h2>Foodology</h2>
                <p className='left'><small>healthy food delivery</small></p>
            </div>
            <div>
                <p><small>copyright @ {year} </small></p></div>
        </footer>
    );
};

export default Footer;