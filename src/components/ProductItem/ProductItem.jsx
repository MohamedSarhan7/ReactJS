
import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductItem.css'
import { productsAPI } from '../../API/Products'
import { useNavigate,useParams } from 'react-router-dom';

export default function ProductItem() {
    // useNavigate()
    const { id } = useParams();
    const [product, setproduct] = useState({})
    let getProduct = async () => {
        try {
            let response = await productsAPI.getProductById(id);
            // console.log(response)
            setproduct({...response.data})
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <div className='d-flex justify-content-center'>

            <div className='col-lg-4 col-md-6 col-sm-12  p-4 product'>

                <Card className='h-100' >
                    <Card.Img className='h-lg-50 h-50' variant="top" src={product.imageURL} />
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
        </div>
    )
}
