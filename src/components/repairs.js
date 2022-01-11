import React from "react"
import { CustomerList } from "./customers/customerList"
import { EmployeeList } from "./employees/employees.js"

export const Repairs = () => {
    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>

        {
            <CustomerList />    
        }
        {
            <EmployeeList />
        }
    </>)
}