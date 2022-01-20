import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getAllEmployees } from "../ApiManager"
export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeSpecialties, setSpecialties] = useState("")

    const history = useHistory()

    useEffect(
        () => {
           getAllEmployees()
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const justSpecialties = employees.map(emp => emp.specialty)
            setSpecialties(justSpecialties.join(","))
    }, [employees])

    return (
        <>
            <h1>Employees</h1>
            <button onClick={() => history.push("/employees/create")}>Add New Employee</button>
            <div>
                Specialties: { employeeSpecialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <div className="employee_card" key={`employee--${employee.id}`}>
                                    <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                                </div>
                    }           
                )
            }
       
    </>)
}