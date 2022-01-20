import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react/cjs/react.development";
import { getAllEmployees, submitNewTicket} from "../ApiManager"

export const TicketForm = () => {
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false,
        employeeId:"",
    });
    const [employees, setEmployee]= useState([]);
    const history = useHistory();

    useEffect(() => {
        getAllEmployees()
            .then((data) => {
                setEmployee(data)
            })
    },
    []
    );
    
    const saveTicket = (event) => {
        event.preventDefault()

        const newTicket ={
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: ticket.employeeId,
            dateCompleted:""
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }
        return submitNewTicket(fetchOption)
            .then(() => {
               history.push("/serviceTickets")

            })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                                updateTicket(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="emergency">Emergency:</label>
                    <input type="checkbox"
                        onChange={
                            (evt)  => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                <label htmlFor="employeeAssigned">Assign Employee</label>
                <select  onChange={
                        (evt)  => {
                            const copy = {...ticket}
                            copy.employeeId = parseInt(evt.target.value)
                            updateTicket(copy)
                        }
                    }>
                        <option value="">Choose Employee</option>
                        {employees.map((employee) => {
                            return <option key={`${employee.id}`} value={employee.id}>{employee.name}</option>
                        })}
                    </select>
            </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}