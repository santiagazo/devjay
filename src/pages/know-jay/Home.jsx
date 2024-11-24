import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/contact">Go to Contact Page</Link>
        </div>
    );
};

export default Home;