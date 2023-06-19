import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>
            <h1 className='text-5xl bold'>We're sorry, but we could not find the author you are looking for.<br /> Would you like to add this author to our database?</h1>
            <Link to='/new' className='text-xl text-blue-200'>Add an author</Link><br />
            <Link to='/' className='text-xl text-blue-200'>Return Home</Link>
        </div>
    )
};

export default NoMatch;