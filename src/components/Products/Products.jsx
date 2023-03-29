import React, { useState, useEffect } from 'react'
import ProductItem from '../ProductItem/ProductItem';
export default function Products({ data }) {



    
    return (
        <div>
            <div className='bg-secondary bg-opacity-25' id='products'>
                <div>
                    <h3 className='text-center fw-bold fs-1 p-5'>Our Products</h3>
                </div>

                <div className='mx-5'>
                    {data.length!=0 ?
                    <div className='row'>
                            {data.map((item, index) => {
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
