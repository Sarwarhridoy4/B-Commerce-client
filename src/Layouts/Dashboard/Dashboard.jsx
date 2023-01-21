import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav/Nav';

const Dashboard = () => {
    return (
        <div className='relative'>
            <Nav></Nav>
            <div className='absolute bottom-2 right-2'>
            <Link to='/'><button className="btn btn-outline btn-warning">🏠</button></Link>
            </div>
        </div>
    );
};

export default Dashboard;