import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/customerList"
import { EmployeeForm } from "./employees/createEmployee"
import { EmployeeList } from "./employees/employees"
import { TicketList } from "./serviceTickets/serviceTickets"
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
            <Route exact path="/serviceTickets">
                <TicketList />
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