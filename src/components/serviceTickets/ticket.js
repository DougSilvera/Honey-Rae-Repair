import React from "react";
import { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { getAllEmployees, getSingleTicket, updateServiceTicket } from "../ApiManager";

export const TicketDetail = () => {
  const [ticket, setTicket] = useState({});
  const [employees, setEmployees] = useState([]);
  const { ticketId } = useParams();
  const history = useHistory();

  useEffect(() => {
   getAllEmployees()
      .then((data) => {
        setEmployees(data);
      });
  }, []);
  useEffect(() => {
   getSingleTicket(ticketId)
      .then((data) => {
        setTicket(data);
      });
  }, [ticketId]);

  const assignEmployee = (event) => {
    event.preventDefault();
    const newTicketObject = {
      description: ticket.description,
      emergency: ticket.emergency,
      customerId: ticket.customerId,
      employeeId: ticket.employeeId,
      dateCompleted: ticket.dateCompleted,
    };

    return updateServiceTicket(ticketId, newTicketObject)
    .then(() => {
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
