import React from 'react';
import image from '../../src/About/rsz_1scanner_20210714_213348.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <h2>My Portfolio</h2>
            <img src={image} alt="" />
            <h3 className='text-success'>Joysree Paul Tuli</h3>
            <h4>My Life Goal</h4>
            <div className='box'>
                <p>I always had the desire to be an entrepreneour.I love to cook  and feed people.For this reason creating Foodology Service that would provide me with the scope of doing something that I am passionate  about. In future I want to expand this business to give people authentic and fresh food. I want to create my own signature dishes.</p></div>
        </div>

    );
};

export default About;