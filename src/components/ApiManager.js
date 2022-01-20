

const API = "http://localhost:8088"


export const getAllCustomers= () => {
    return fetch(`${API}/customers`)
                .then(res => res.json())
}

export const addNewEmployee = (fetchOption) => {
    return fetch("http://localhost:8088/employees", fetchOption)
        .then(response => response.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
                .then(res => res.json())
}

export const getOneEmployee = (employeeId) => {
    return  fetch(`http://localhost:8088/employees/${employeeId}`)
    .then(resp => resp.json())
}

export const getAllTickets = () => {
    return fetch(
        "http://localhost:8088/serviceTickets?_expand=employee&_expand=customer"
      )
        .then((res) => res.json())
}

export const killTicket = (id) => {
    return  fetch(`http://localhost:8088/serviceTickets/${id}`, {
        method: "DELETE"
      })
}

export const getSingleTicket= (ticketId) => {
    return  fetch(
        `http://localhost:8088/serviceTickets/${ticketId}?_expand=employee&_expand=customer`
      )
        .then((resp) => resp.json())
}

export const updateServiceTicket = (ticketId, newTicketObject) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTicketObject),
      })
}

export const submitNewTicket = (fetchOption) => {
    return fetch("http://localhost:8088/serviceTickets", fetchOption)
    .then(response => response.json())
}

export const checkUserEmail = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
            .then(res => res.json())
}

export const existingUserInfo = (customer) => {
    return fetch(`http://localhost:8088/customers?email=${customer.email}`)
            .then(res => res.json())
}

export const sendNewUser = (customer) => {
   return fetch("http://localhost:8088/customers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(customer)
                    })
                        .then(res => res.json())
}