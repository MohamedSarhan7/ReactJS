
import React, { useState, useEffect } from 'react'
import ProductsArray from './productsArray'
import ProductItem from '../ProductItem/ProductItem';
import { Form, Button } from 'react-bootstrap';
export default function Products() {
    const [search, setSearch] = useState('')
    const [arr, setArr] = useState([...ProductsArray])
    const [arrx, setArrx] = useState([...ProductsArray])

    useEffect(() => {

        setArr([...ProductsArray]);
        const filterd = arr.filter((item) => {
            return item.name.includes(search)
        })
        setArrx([...filterd])

    }, [search])


    const handelOnSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div>
            <div className='bg-secondary bg-opacity-25' id='products'>
                <div>
                    <h3 className='text-center fw-bold fs-1 p-5'>Our Products</h3>
                </div>

                <div className="d-flex justify-content-end  px-5 mx-2" >

                    <Form.Control className='w-25 p-3 ' onChange={handelOnSearch} value={search} type="text" placeholder="Enter Username" />

                </div>
                <div className='mx-5'>
                {arrx.length!=0 ?
                    <div className='row'>
                        {arrx.map((item, index) => {
                            return <ProductItem key={item.id.toString()} product={item} />
                        })}
                    </div> : <div className='d-flex justify-content-center p-3'>
                        <p className='fs-1 fw-bolder'>Not Found !!</p>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
