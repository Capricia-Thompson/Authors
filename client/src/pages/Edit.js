import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NoMatch from '../components/NoMatch';

const Edit = () => {

    const [author, setAuthor] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/authors/' + id)
            .then(res => {
                setAuthor(res.data)
                setFound(true)
            })
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const initialName = author.name
    const [errors, setErrors] = useState([])
    const [found, setFound] = useState(false)

    const updateAuthor = (author) => {
        axios.patch(`http://localhost:8000/authors/${id}`, author)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
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
            <h3>Edit this author:</h3>
            {found && <Form initialName={initialName} submitProp={updateAuthor} errors={errors} />}
            {!found && <NoMatch />}
        </div>
    )
};

export default Edit;