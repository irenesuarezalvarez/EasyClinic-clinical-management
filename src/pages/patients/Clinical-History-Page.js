import React, { useState, useEffect } from "react";
import {  Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import axiosApi from "../../utils/AxiosApi";
import Box from "../../components/layouts/Box";
import Button from "../../components/layouts/Button";
import Card from "../../components/layouts/Card";
import {StyledInput} from "../../components/forms/Input";
import PageWrapper from "../../components/layouts/PageWrapper";
import TextArea from "../../components/forms/Textarea";


const URL = "/api/history"
 
const HistoryPage = () => {
    const { id } = useParams();
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
            patient: id
        }

        try {
            setRedirect(true) 
            console.log('New session was saved', newSession)
            await axiosApi.post(`${URL}/create`, newSession)
        } catch (err) {
            console.error(err)
        } 
    } 

    const deleteSession = async (id, patient) => {
        try {
            await axiosApi.delete(`${URL}/${id}/${patient}`)
            const del = history.filter(session => id !== session.id)
            setHistory(del)
        } catch (err) {
            console.error(err)
        } 

    }    

    //Render previous sessions
    const renderSessions = () => {
        return history.length > 0 && history.map(({ date, notes, content, _id, patient }) => {
        /*   console.log('Aquiiii', date, patient) */
            return (
                <Card bgcolor="rgba(232, 236, 237)" width="100%">
               {/*      <div>
                    {Object.keys(patient).length > 0 &&
                        <div>PatName: {patient.name}</div>
                    }
                    </div> */}
                    <Box direction="row">
                        <h3>Date: {date}</h3>
                        <Box bgcolor="rgba(255, 195, 0)" shadow="0 0 20px rgba(0 0 0 / 15%)" height="5rem" width="16rem" margin="0 0 0 1rem">{notes}</Box>
                    </Box>
                   
                    <Box radius="0">
                        <Box bgcolor="white" radius="0" shadow="0 0 20px rgba(0 0 0 / 15%)" height="15rem" width="25rem" margin="1rem">{content}</Box>
                    </Box>
      
                    <Box direction="row" width="100%" position="flex-end">
                        <Button bgcolor="rgba(255, 127, 80)" hovercolor="rgba(250, 45, 25)" onClick={() => deleteSession(_id, patient)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                        <Button>Edit</Button>
                    </Box>
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
            <Card title="Clinical History">
                
                <Card as={"form"} onSubmit={createSession} bgcolor="rgba(197, 225, 232)" margin="0 0 1rem 0" width="100%">
                        <Box direction="row" padding="1rem">
                            <h4>Date: </h4>
                            <input
                                name="date"
                                required
                                value={input.date} 
                                placeholder="Date"
                                onChange={handleChange}
                                type="date"
                            />
                        </Box>
                    
                    
                    <Box radius="0">
                        <ImportantStyled
                                name="notes"
                                required
                                value={input.notes} 
                                placeholder="Notes"
                                onChange= {handleChange}
                                type = "text"
                            />
                        
                            <TextArea
                                name="content"
                                required
                                value={input.content} 
                                onChange={handleChange}
                                type="text"
                            />

                    </Box>    
                        <Box align="flex-end" width="100%">
                        <Button type="submit">Save</Button>
                        </Box>
                </Card>
            
                <article>
                    {renderSessions()}
                </article>
            </Card>
        </PageWrapper>
    );
};


const ImportantStyled = styled(StyledInput)`
    background-color:  #FFC300;
`

export default HistoryPage;

