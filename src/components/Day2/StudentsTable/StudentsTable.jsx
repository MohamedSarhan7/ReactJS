import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

export default function StudentsTable({ students }) {
    // console.log(props)


    return (
        <div className='d-flex justify-content-center'> 
        { students.length > 0 ?

            <Table striped bordered hover variant="light" className='w-75 m-5 p-5' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((item, index) => 
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>)}
                </tbody>
            </Table> :null
            }

        </div>
    )
}
