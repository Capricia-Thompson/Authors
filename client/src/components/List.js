import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const List = (props) => {
    const { authors } = props

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/authors/' + id)
            .then(res => console.log(res))
    }

    const navigate = useNavigate()

    const editAuthor = (id) => {
        navigate('/edit/' + id)
    }

    return (
        <table className='table w-3/4 my-10 table-auto border border-separate border-grey-200 mx-auto'>
            <thead className='table-header-group bold underline text-2xl text-center'>
                <tr className='table-row'>
                    <th className='table-cell p-5 border border-grey-200'>Author</th>
                    <th className='table-cell p-5 border border-grey-200'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author) => {
                    return (
                        < tr className='table-row' key={author._id}>
                            <td className='table-cell p-5 border border-grey-200'>{author.name}</td>
                            <td className='table-cell p-5 border border-grey-200'>
                                <button onClick={e => editAuthor(author._id)} className='rounded-full hover:bg-teal-600 bg-teal-950 p-5 mx-5'>Edit</button>
                                <button onClick={e => deleteAuthor(author._id)} className='rounded-full hover:bg-red-600 bg-red-950 p-5 mx-5'>Delete</button>
                            </td>
                        </tr>)
                })}
            </tbody>
        </table >
    )
}

export default List;