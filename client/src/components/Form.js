import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const [name, setName] = useState("")
    const { submitProp, initialName, errors } = props
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        submitProp({ name })
    }

    const cancel = () => {
        navigate('/')
    }
    return (
        <form onSubmit={submitHandler} className='my-10 border border-grey-200 p-10'>
            {errors.map((err, index) => <p className='text-red-600 bold text-lg' key={index}>{err}</p>)}
            <label htmlFor='name' className='my-10'>Name:</label><br />
            <input name='name' type='text' defaultValue={initialName} onChange={(e) => { setName(e.target.value) }} className='my-10 bg-slate-700 border border-grey-200 w-1/2' /><br />
            <button onClick={cancel} className='rounded-full hover:bg-red-600 bg-red-950 p-5 mx-5'>Cancel</button>
            <input type='submit' className='rounded-full hover:bg-emerald-600 bg-emerald-950 p-5 mx-5' />
        </form>
    )
};

export default Form;