import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then(
                    (customers) => {assignCustomers(customers) }
                )
        },
        []
    )

    return (
        <>
        
            <h1>Customers</h1>
        {
            customers.map(
                (customerObject) => {
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                 }
            )
        }
    </>)
}