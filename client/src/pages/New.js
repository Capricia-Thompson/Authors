import React, { useState } from 'react';
import Form from '../components/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const New = () => {

    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const initialName = ""

    const createAuthor = author => {
        axios.post('http://localhost:8000/authors', author)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }



    return (
        <div>
            <Link to='/' className='text-xl text-blue-200'>Home</Link>
            <h3>Add a new author:</h3>
            <Form submitProp={createAuthor} initialName={initialName} errors={errors} />
        </div>
    )
};

export default New;