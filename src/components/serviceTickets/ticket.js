import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const TicketDetail = () => {
    const [ticket, setTicket]=useState({})
    const {ticketId} = useParams()

    useEffect(() => {
        fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=employee&_expand=customer`)
            .then(resp => resp.json())
            .then((data) => {
                setTicket(data)
            })
    },
    [ticketId]
    )

    return (
        <div className="ticket_detail_parent">
            
                <section className="ticket_detail">
                <h2 className="ticket_detail_header">Ticket Details</h2>
                    <h3 className="ticket_description">{ticket.description}</h3>
                    <div className="ticket_customer">Customer: {ticket.customer?.name}</div>
                    <div className="ticket_employee">Assigned Employee: {ticket.employee?.name}</div>
                </section>
        </div>
    )
}