import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Difference between Authentication and Authorization</h2>
            <h4>Answer:</h4>
            <h3>Authentication:</h3>
            <li>User identity is confirmed</li>
            <li>User and user server is verified</li>
            <li>Login details, usernames, passwords, OTPs required</li>
            <li>Data is available via Token IDs</li>
            <li>User can partially change the authentication details as per the requirement</li>

            <h4>Answer:</h4>
            <h3>Authorization</h3>
            <li>Here, the user is given permission to access the system / resources after validation</li>
            <li>Here it is validated if the user is allowed to access via some defined rules</li>
            <li>Checks the security level and privilege of the user, thus determining what the user can or cannot have access to</li>
            <li>Data provided via Access token</li>
            <li>User cannot modify the Authorization permissions as it is given to a user by the owner/manager of the system, and only has the authority to change it.</li>

            <h2>Why are you using firebase?</h2>
            <h4>Answer:</h4>
            <h3>Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc. you can use Firebase.</h3>
            <h3>hjjjjjyd</h3>
        </div>
    );
};

export default Blogs;