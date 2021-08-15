import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios'

const URL = 'http://localhost:5000/patients/all'

const ListAllPatients = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setEmployees(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['History number', 'Surname', 'Name', 'Operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({ _id, surname, name }) => {
            return (
                <tr key={_id}>
                    <td>{_id}</td>
                    <td>{surname}</td>
                    <td>{name}</td>
                    <td>
                        <button onClick={() => removeData(_id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>List of Patients</h1>
            <Link to="/create">New Patient</Link>
            <table id='employee'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}


export default ListAllPatients;