import React, { useEffect, useState } from 'react'

import StudentForm from '../StudentFrom/StudentForm'
import StudentsTable from '../StudentsTable/StudentsTable'
export default function Task1() {

  const [students, setStudents] = useState([]);
  let addStudent = (newStudent) => {
    setStudents([...students, newStudent])
  }
  return (
    <div >
      <StudentForm myFun={addStudent}></StudentForm>
      <StudentsTable students={students}></StudentsTable>
    </div>
  )
}
