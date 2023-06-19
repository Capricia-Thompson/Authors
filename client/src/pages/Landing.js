import React, { useEffect, useState } from 'react';
import List from '../components/List';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Landing = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/authors')
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [authors])

    return (
        <div>
            <Link to='/new' className='text-xl text-blue-200'>Add an author</Link>
            <List authors={authors} />
        </div>
    )
};

export default Landing;