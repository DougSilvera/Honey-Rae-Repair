import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAllTickets, killTicket } from "../ApiManager";

export const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const history = useHistory();
  

  useEffect(() => {
    getAllTickets()
      .then((tickets) => {
        setTickets(tickets);
      });
  }, []);

  const deleteTicket = (id) => {
     killTicket(id)
    .then(() => {
      getAllTickets()
      .then((tickets) => {
        setTickets(tickets);
      });
    })
  }

  return (
    <>
      <h1>Service Tickets</h1>

      <button onClick={() => history.push("/serviceTickets/create")}>
        Create Ticket
      </button>
      {tickets.map((ticketObject) => {
        if (ticketObject.emergency === false) {
          return (
            <div className="ticket__card" key={`ticket--${ticketObject.id}`}>
              <p>
              <Link to={`/serviceTickets/${ticketObject.id}`}>{ticketObject.description}</Link> Submitted by{" "}
                {ticketObject.customer.name}
              </p>
              <p>worked on by {ticketObject.employee.name}</p>
              <button className="delete-ticket" onClick={() => {deleteTicket(ticketObject.id)}}>Delete Service Ticket</button>
            </div>
          );
        } else {
          return (
            <div
              className="ticket__card__emergency"
              key={`ticket--${ticketObject.id}`}
            >
              <p>
                {ticketObject.emergency ? "🚑" : ""} <Link to={`/serviceTickets/${ticketObject.id}`}>{ticketObject.description}</Link>{" "}
                Submitted by {ticketObject.customer.name}
              </p>
              <p>worked on by {ticketObject.employee.name}</p>
              <button className="delete-ticket" onClick={() => {deleteTicket(ticketObject.id)}}>Delete Service Ticket</button>
            </div>
          );
        }
      })}
    </>
  );
};
