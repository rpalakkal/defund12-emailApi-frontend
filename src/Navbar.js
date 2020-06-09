import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function HeaderBar(){
    return(
        <Navbar bg="light">
        <Navbar.Brand>
        <img
            alt=""
            src="https://defund12.org/favicon.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        Defund 12 Email Lookup
        </Navbar.Brand>
    </Navbar>
    )
}