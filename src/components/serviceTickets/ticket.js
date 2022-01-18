import React from "react";
import { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export const TicketDetail = () => {
  const [ticket, setTicket] = useState({});
  const [employees, setEmployees] = useState([]);
  const { ticketId } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:8088/employees")
      .then((resp) => resp.json())
      .then((data) => {
        setEmployees(data);
      });
  }, []);
  useEffect(() => {
    fetch(
      `http://localhost:8088/serviceTickets/${ticketId}?_expand=employee&_expand=customer`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTicket(data);
      });
  }, [ticketId]);

  const assignEmployee = (event) => {
    event.preventDefault();
    const newTicketObject = {
      description: ticket.description,
      emergency: ticket.emergency,
      customerId: parseInt(localStorage.getItem("honey_customer")),
      employeeId: ticket.employeeId,
      dateCompleted: ticket.dateCompleted,
    };

    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicketObject),
    }).then(() => {
      history.push("/serviceTickets");
    });
  };

  return (
    <div className="ticket_detail_parent">
      <section className="ticket_detail">
        <h2 className="ticket_detail_header">Ticket Details</h2>
        <h3 className="ticket_description">{ticket.description}</h3>
        <div className="ticket_customer">Customer: {ticket.customer?.name}</div>
        <div className="ticket_employee">
          Assigned Employee: {ticket.employee?.name}
        </div>
        <div className="change_employee">
          <label htmlFor="change-employee-select">
            Change Assigned Employee:
          </label>
          <select
            onChange={(evt) => {
              const copy = { ...ticket };
              copy.employeeId = parseInt(evt.target.value);
              setTicket(copy);
            }}
          >
            <option value="">Choose Employee</option>
            {employees.map((employee) => {
              return (
                <option key={`${employee.id}`} value={employee.id}>
                  {employee.name}
                </option>
              );
            })}
          </select>
        </div>
        <button className="submit_employee_update" onClick={assignEmployee}>
          Update Assigned Employee
        </button>
      </section>
    </div>
  );
};
