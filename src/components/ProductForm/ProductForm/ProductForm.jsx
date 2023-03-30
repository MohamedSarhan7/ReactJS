import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { productsAPI } from "../../../API/Products"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
export default function ProductForm() {
    /** Joy ,, Formik  */
    let navigate = useNavigate();
    // let [formValue, setFormValues] = useState({name:'',price:0,quantity:0,description:''});

    let [product, setProduct] = useState({ name: '', price: 0, quantity: 0, description: '' });
    const { id } = useParams();

    const getProductById = async () => {
        let response = await productsAPI.getProductById(id);
        setProduct(response.data);
    };

    useEffect(() => {
        if (id != 0) {
            getProductById();
        }
    }, []);

    const onSubmit = async (values) => {
        if (id == 0) {
            await productsAPI.addProduct(values);
        } else {
            await productsAPI.editProduct(id, values);
        }

        navigate("/");
    };

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     console.log(formValue);
    //     if (id == 0) {
    //         await productsAPI.addProduct(formValue);
    //     } else {
    //         await productsAPI.editProduct(id, formValue);
    //     }
    //     navigate("/");
    // };



    const Schema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Product Name is Required'),
        price: Yup.number()
            .min(1, 'Too Short!')
            .max(10000, 'Too Long!')
            .required('Product price is Required'),
        quantity: Yup.number()
            .min(1, 'Too Short!')
            .max(10000, 'Too Long!')
            .required('Product quantity is Required'),
        description: Yup.string()
            .min(6, 'Too Short!')
            .max(350, 'Too Long!')
            .required('Product description is Required'),
    });
    return (
        <div className="bg-dark p-5 text-center">
            <h2 className="text-muted m-4">
                {id == 0 ? "Add Product " : "Edit Product"}
            </h2>

            <Formik
                enableReinitialize={true}
                initialValues={product}
                values={product}
                validationSchema={Schema}
                onSubmit={onSubmit} >

                {() => (

                    <div className="container w-100 d-flex justify-content-center mb-5">

                        <Form className="w-50">
                            <div className="m-2 p-3" >
                                <Field name='name' placeholder='product name' type='text' className='form-control' />
                                <div className="error">
                                    <ErrorMessage name='name' className="text-danger " component='span' />
                                </div>
                            </div >
                            <div className="m-2 p-3" >
                                <Field name='price' placeholder='price' type='number' className='form-control' />
                                <div className="error">
                                    <ErrorMessage name='price' className="text-danger " component='span' />
                                </div>
                            </div>
                            <div className="m-2 p-3" >
                                <Field name='quantity' type='number' placeholder='product quantity' className='form-control' />
                                <div className="error">
                                    <ErrorMessage name='quantity' className="text-danger " component='span' />
                                </div>
                            </div>

                            <div className="m-2 p-3" >
                                <Field name='description' rows="6" component="textarea" type='textarea' placeholder='product description' className='form-control' />
                                <div className="error">
                                    <ErrorMessage name='description' className="text-danger " component='span' />
                                </div>
                            </div>

                            <Button variant="primary" className="my-5" type="submit">
                                {id == 0 ? "Add Product " : "Edit Product"}
                            </Button>
                        </Form>
                    </div>
                )}
            </Formik>

        </div>
    );
}