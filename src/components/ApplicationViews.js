import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/customerList"
import { EmployeeForm } from "./employees/createEmployee"
import { EmployeeList } from "./employees/employees"
import { EmployeeSpecialty } from "./employees/employeeSpecialty"
import { TicketList } from "./serviceTickets/serviceTickets"
import { TicketDetail } from "./serviceTickets/ticket"
import { TicketForm } from "./serviceTickets/ticketForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customerList">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <EmployeeSpecialty />
            </Route>
            <Route exact path="/serviceTickets">
                <TicketList />
            </Route>
            <Route exact path="/serviceTickets/:ticketId(\d+)">
                <TicketDetail />
            </Route>
            <Route path="/serviceTickets/create">
                <TicketForm />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}