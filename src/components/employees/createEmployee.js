import React, {useState} from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const EmployeeForm = () => {
    const [form, updateForm] = useState({
        name: "",
        specialty: "",
    });

    const history = useHistory()

    const saveForm = (event) => {
        event.preventDefault()

        const newForm = {
            name: form.name,
            specialty: form.specialty
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
        .then(response => response.json())
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <form className="ticketForm">
        <h2 className="ticketForm__title">New Hire Information</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Name:</label>
                <input
                    onChange={
                        (evt) => {
                            const copy = {...form}
                            copy.name = evt.target.value
                            updateForm(copy)
                        }
                    }
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                     />
            </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
                <label htmlFor="description">Specialty:</label>
                <input
                    onChange={
                        (evt) => {
                            const copy = {...form}
                            copy.specialty = evt.target.value
                            updateForm(copy)
                        }
                    }
                    
                    type="text"
                    className="form-control"
                    placeholder="Employee Specialty"
                     />
            </div>
        </fieldset>
        <button className="btn btn-primary" onClick={saveForm}>
            Save Information
        </button>
    </form>
    )
}