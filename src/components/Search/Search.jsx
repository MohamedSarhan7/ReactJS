import React, { useState,useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';

export default function Search({ getSearchKey }) {
    const [search, setSearch] = useState('')

    useEffect(() => {
        getSearchKey(search);
    }, [search])

    let handelSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className='bg-secondary bg-opacity-25 '>
            <div className="d-flex justify-content-end   px-5 mx-2" >

                <Form.Control className='w-25 p-3 mt-5' onChange={handelSearch} value={search} type="text" placeholder="Enter Prodcut" />

            </div>
        </div>
    )
}
