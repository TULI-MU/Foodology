import React, { useEffect, useState } from 'react';
import Program from '../Program/Program';
import './Programs.css';

const Programs = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch('programs.json')
            .then(res => res.json())
            .then(data => setPrograms(data));
    }, [])


    return (
        <div id='programs' className='container'>
            <div className="row">
                <h1 className='text text-center mt-5'> Our Programs</h1>
                <div id='programs' className="programs-container">
                    {
                        programs.map(program => <Program
                            key={program.id}
                            program={program}
                        >
                        </Program>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Programs;