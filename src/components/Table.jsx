import React from 'react'
import "./Table.css";

const Table = ({ data }) => {

    const FormData = data !== null | JSON.parse(localStorage.getItem("formData"));

    console.log("Form Data", FormData)

    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Message</th>
            </tr>
            {
                FormData !== null && data.map((data) => {
                    return <tr>
                        <td>{data.firstname}</td>
                        <td>{data.lastname}</td>
                        <td>{data.message}</td>
                    </tr>
                })
            }
        </table>
    )
}

export default Table