import React, { useState, useEffect } from 'react'

import { Form, Button } from 'react-bootstrap';
export default function Task2() {


  let HandelSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='d-flex flex-column justify-content-center align-items-center m-5 py-5'>
      <div className='w-75 p-4 border border-1 rounded-3'>



          <div className="mb-3 " >
            
            <Form.Control type="text"  placeholder="Enter Username" />
            
          </div>

          

        
      </div>
    </div>
  )
}
