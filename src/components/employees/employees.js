import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then(
                    (employees) => {assignEmployees(employees) }
                )
        },
        []
    )

    return (
        <>
        
            <h1>Employees</h1>
        {
            employees.map(
                (employeeObject) => {
                    return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
                 }
            )
        }
    </>)
}