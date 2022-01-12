import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")
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
    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }

        },
        [customers]
    )

    return (
        <>
        
            <h1>Customers</h1>
        {
            <div>{totalCustomerMessage}</div>
        }
        {
            customers.slice(0, 5).map(
                (customerObject) => {
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                 }
            )
        }
    </>)
}