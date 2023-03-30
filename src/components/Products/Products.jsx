import React, { useState, useEffect } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { productsAPI } from '../../API/Products'

// table
export default function Products() {
    const [productsData, setProductsData] = useState([])
    
    let navigate=useNavigate();
// const [arr, setArr] = useState([...data])

    let getAllProducts = async () => {
        try {
            let response = await productsAPI.getAllProducts();
            setProductsData([...response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])



    let deleteProduct = async (id) => {
        try {
            let response = await productsAPI.deleteProduct(id);
        
            setProductsData([...productsData.filter((item)=>item.id!=id)])

        } catch (error) {
            console.log(error)
        }
    }
    const editProduct = (productId) => {
        navigate(`/products/${productId}/edit`);
    };

    return (
        <div className='p-5'>

            <div className="d-flex justify-content-end align-items-center">
                <a className="btn btn-outline-primary  m-5 mb-0 " onClick={()=>{
                    navigate('/products/0/edit')
                }}>
                    <i className="bi bi-plus-circle  fs-3 mx-2 p-5 " ></i>
                </a>
            </div>
            <div>
                <h3 className='text-center fw-bold fs-1 p-5'>Our Products</h3>
            </div>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>

                    {productsData.map((item, index) => {

                        return (

                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}$</td>
                                <td>{item.quantity}</td>
                                
                                <div className="d-flex justify-content-evenly">

                                    <i className="bi bi-eye-fill text-success fs-5"onClick={()=>{
                                        navigate(`products/${item.id}`)
                                    }} ></i>
                                    <i className="bi bi-pencil-square fs-5 " onClick={() => {
                                        editProduct(item.id)
                                    }} ></i>
                                    <i className="bi bi-trash3 text-danger fs-5" onClick={()=>{
                                        deleteProduct(item.id)
                                    }} ></i>

                                </div>
                            </tr>
                        )
                    })

                    }


                </tbody>
            </Table>
        </div>
    )
}


// card

// <div>
//     <div className='bg-secondary bg-opacity-25' id='products'>
//         <div>
//             <h3 className='text-center fw-bold fs-1 p-5'>Our Products</h3>
//         </div>

//         <div className='mx-5'>
//             {data.length != 0 ?
//                 <div className='row'>
//                     {data.map((item, index) => {
//                         return <ProductItem key={item.id.toString()} product={item} />
//                     })}
//                 </div> : <div className='d-flex justify-content-center p-3'>
//                     <p className='fs-1 fw-bolder'>Not Found !!</p>
//                 </div>
//             }
//         </div>
//     </div>
// </div>