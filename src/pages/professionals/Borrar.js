/* import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from 'axios';


const PatientsTable = () => {
    const [redirect, setRedirect] = useState(false); 
    const [patients, setPatients] = useState([]);
  
      useEffect(() => {
      const fetchUsers = async () => {
        const result = await fetch("http://localhost:5000/patients"); //HELP NEEDED HERE
        const patients = await result.json();
        setPatients([...patients]);
      };
  
      fetchUsers();
      }, []);
    return patients && patients.map(({ id, name, email, phone }) => {
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td >
                    <button >Delete</button>
                </td>
            </tr>
        )
    })
}

/* onClick={() => removeData(id)} */

export default PatientsTable; */