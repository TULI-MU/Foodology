import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProgramDetail = () => {
    const { programId } = useParams();
    return (
        <div>
            <h2>Welcome to program detail:{programId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>

        </div>
    );
};

export default ProgramDetail;