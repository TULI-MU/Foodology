import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Program.css';

const Program = ({ program }) => {
    const { id, name, price, person, description, img } = program;
    // console.log(props.name);
    const navigate = useNavigate();

    const navigateToProgramDetail = id => {

        navigate('/checkout');
    }
    return (
        <div className='program'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <h4>Person:{person}</h4>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToProgramDetail(id)} className='btn'>{name}</button>
        </div>
    );
};

export default Program;