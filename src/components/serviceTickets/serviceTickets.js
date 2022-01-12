import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
            .then(res => res.json())
            .then(
                (tickets) => {setTickets(tickets) }
            )
        },
        []
    )

    return (
        <>
            <h1>Service Tickets</h1>
            
            <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
            {
                tickets.map((ticketObject) => {
                    if (ticketObject.emergency=== false) {
                    return <div className="ticket__card" key={`ticket--${ticketObject.id}`}>
                        <p>{ticketObject.description} Submitted by {ticketObject.customer.name}</p>
                        <p>worked on by {ticketObject.employee.name}</p>
                    </div>} else {
                       return <div className="ticket__card__emergency" key={`ticket--${ticketObject.id}`}>
                        <p>{ticketObject.emergency ? "🚑" : ""} {ticketObject.description} Submitted by {ticketObject.customer.name}</p>
                        <p>worked on by {ticketObject.employee.name}</p>
                    </div>
                    }
                })
            }

        </>
    )
}