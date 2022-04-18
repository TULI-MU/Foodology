import React from 'react';
import not from '../../src/images/not.jpg';

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <img src={not} alt="" />
        </div>
    );
};

export default NotFound;