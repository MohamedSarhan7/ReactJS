import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
const StudentForm = ({ myFun }) => {

    const nameRegex = /^[a-zA-z]{3,}$/;

    const [student, setStudent] = useState({ id: 1, name: "", age: "" });
    const [errors, setErrors] = useState({ name: null, age: null });
    const [isTouched, setIsTouched] = useState({ name: false, age: false });

    let HandelName = (e) => {
        setStudent({ ...student, name: e.target.value })
        // setIsTouched({ ...isTouched, name: true })

    }
    let HandelAge = (e) => {
        setStudent({ ...student, age: e.target.value })
        // setIsTouched({ ...isTouched, age: true })
    }

    let HandelSubmit = (e) => {
        e.preventDefault();

        if (student.name == '') {
            setErrors({ ...errors, name: "Cannot be empty" });


        } else if (!nameRegex.test(student.name)) {
            setErrors({ ...errors, name: "Invaild Name" });
        }
        else if (student.age < 18) {
            setErrors({ ...errors, age: "age should be greater than 18!" });
        }
        else {

            setStudent({ ...student, id: student.id + 1 })
            myFun(student);
            setErrors({})
            // setStudent({id:student.id ,name:'',age:0})
        }


    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mb-5'>

            <h2 className='fw-border p-3 mt-5'>Add Student</h2>
            <div className='w-50 p-4 border border-1 rounded-3'>


                <Form onSubmit={HandelSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={HandelName} value={student.name} placeholder="Enter Username" />
                        {
                            typeof errors.name == 'string' ?
                                <Form.Text className="text-danger">
                                    {errors.name}
                                </Form.Text> : null
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" onChange={HandelAge} value={student.age} placeholder="Age" />

                        {

                            typeof errors.age == 'string' ?
                                <Form.Text className="text-danger">
                                    {errors.age}
                                </Form.Text> : null
                        }

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default StudentForm
