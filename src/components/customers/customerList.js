import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")
    useEffect(
        () => {
            getAllCustomers()
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
            customers.map(
                (customerObject) => {
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                 }
            )
        }
    </>)
}