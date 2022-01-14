import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react/cjs/react.development";

export const EmployeeSpecialty = () => {
    const [employee, setEmployee] = useState({})
    const {employeeId} = useParams()

    useEffect(() => {
        fetch(`http://localhost:8088/employees/${employeeId}`)
            .then(resp => resp.json())
            .then((data) => {
         setEmployee(data)
            })
    },
    [employeeId]
    )

    return (
        <>
            <h2>{employee.name}</h2>
            <p>Specialty is {employee.specialty}</p>
        </>
    )
}