import React, { Component } from 'react'
import ProductsArray from './productsArray'
import ProductItem from '../ProductItem/ProductItem';
export default class Products extends Component {
    render() {
        return (
            <div className='bg-secondary bg-opacity-25' id='products'>
                <div>
                    <h3 className='text-center fw-bold fs-1 p-5'>Our Products</h3>
                </div>
                <div className='mx-5'>
                    <div className='row'>
                        {ProductsArray.map((item, index) => {
                            return <ProductItem key={item.id.toString()} product={item} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
