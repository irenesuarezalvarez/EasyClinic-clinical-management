import React, { useState, useEffect } from "react";
import {  Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";
import Card from "../../components/layouts/Card";
import Button from "../../components/layouts/Button";
import Input, {StyledInput} from "../../components/forms/Input";
import PageWrapper from "../../components/layouts/PageWrapper";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Box from "../../components/layouts/Box";

const URL = "/api/history"
 
const HistoryPage = () => {
    let { id } = useParams();
    const [input, setInput] = useState({});
    const [redirect, setRedirect] = useState(false); 
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getHistory()
    }, [history])
    
    
    const getHistory = async () =>{
        const response = await axiosApi.get(`${URL}/${id}`);
        const patientHistory = await response
        setHistory(patientHistory.data.history)
    } 
   
       
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    
    const createSession = async event => {
        event.preventDefault()
    
        const newSession = {
            date: input.date,
            notes: input.notes,
            content: input.content,
        }

        try {
            setRedirect(true) 
            console.log('New session was saved', newSession)
            await axiosApi.post(`${URL}/${id}`, newSession)
        } catch (err) {
            console.error(err)
        } 
    } 

    const deleteSession = async (id) => {
        try {
            console.log('Session deleted')
            await axiosApi.delete(`${URL}/${id}`)
            const del = history.filter(session => id !== session.id)
            setHistory(del)
        } catch (err) {
            console.error(err)
        } 

    }    

    //Render previous sessions
    const renderSessions = () => {
        return history.length > 0  && history.map(({ date, notes, content, _id }) => {
            return (
                <Card>
                    <h3>Date: {date}</h3>
                    <Box radius="0">
                        <Card bgColor="rgba(255, 195, 0)">{notes}</Card>
                        <Card>{content}</Card>
                    </Box>
      
                    <div>
                        <Button bgColor="rgba(255, 127, 80)" hoverColor="rgba(250, 45, 25)" onClick={() => deleteSession(_id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                        <Button>Edit</Button>
                    </div>
                </Card>
            )
        })
    }
    //

    if(redirect){
        return <Redirect to='/mypatients'/>
    }

    return (
        <PageWrapper>
            <form onSubmit={createSession}>
                <Card bgColor="rgba(232, 236, 237)">
                    <input
                        name="date"
                        required
                        value={input.date} 
                        placeholder="Date"
                        onChange={handleChange}
                        type="date"
                    />
                
                   <Box radius="0">
                    <ImportantStyled
                            name="notes"
                            required
                            value={input.notes} 
                            placeholder="Notes"
                            onChange= {handleChange}
                            type = "text"
                        />
                    
                        <Input
                            name="content"
                            required
                            value={input.content} 
                            placeholder="Content"
                            onChange={handleChange}
                            type="text"
                        />

                   </Box>

                                     
                    <div>
                       <Button type="submit">Save</Button>
                    </div>
                </Card>
            </form>
            <article>
                {renderSessions()}
            </article>
        </PageWrapper>
    );
};


const ImportantStyled = styled(StyledInput)`
    background-color:  #FFC300;
`

export default HistoryPage;

