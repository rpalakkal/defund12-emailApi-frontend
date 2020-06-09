import React from 'react';
import Table from 'react-bootstrap/Table'

export default function results(props){

    return(
        <Table striped bordered>
            <thead>
                <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map(contact=>
                    <tr>
                        <td>{contact.name}</td>
                        <td>{contact.title}</td>
                        <td>{contact.email}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}