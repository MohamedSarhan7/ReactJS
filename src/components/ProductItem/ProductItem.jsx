import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductItem.css'
export default class ProductItem extends Component {
    render() {
        const product = this.props.product

        return (
            <div className='col-lg-4 col-md-6 col-sm-12  p-4 product'>

                <Card className='h-100' >
                    <Card.Img className='h-lg-50 h-50' variant="top" src={product.imageURL.toString()} />
                    <Card.Body className='h-lg-50 h-50' >
                        <div className='d-flex justify-content-around'>
                            <Card.Title>{product.name} </Card.Title>
                            <Card.Text className='w-50 fw-bold text-center bg-info bg-opacity-10 border border-info border-opacity-50'>{product.price}$ </Card.Text>
                        </div>
                        <Card.Text className='m-2 p-2'>
                            {product.description}
                        </Card.Text>
                        <Card.Text className={`fs-5  fw-bold  ${product.quantity > 0 ? 'text-dark' : 'text-danger'} `}>
                            {product.quantity > 0 ? `Quantity: ${product.quantity}` : "Out Of Stock"}
                        </Card.Text>
                        <Button className={`btn ${product.quantity > 0 ? 'btn-primary' : 'btn-danger disabled'}`}>
                            {product.quantity > 0 ? `Buy Now !` : "Sold"}</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
