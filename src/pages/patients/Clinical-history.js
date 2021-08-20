import React, { useState, useEffect } from "react";
import {  Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";
import Card, { CardContainer } from "../../components/layouts/Card";
import Button, { StyledBtn } from "../../components/layouts/Button";
import Input from "../../components/forms/Input";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const History = () => {
    let { id } = useParams();
    const [input, setInput] = useState({});
    const [redirect, setRedirect] = useState(false); 
    const [sessions, setSessions] = useState([
        {
        date: '98/8/98',
        notes: 'important',
        content: 'yoooo content'
        },
        {
            date: '98/8/98',
            notes: 'importantee',
            content: 'yoooo content'
        },
        ]);
/* 
    useEffect(() => {
        getSessions()
    }, [])
    
    
    const getSessions = async () =>{
        const response = await axiosApi.get(`/patients/sessions/${id}`);
        setSessions(response.data)
    } */
   
       
    const handleChange = (event) => {
        const { name, value } = event.target;
            setInput((prevState) => ({
            ...prevState,
            [name]: value,
            }));
        };
    
      const handleClick = async event => {
        event.preventDefault()
        
        const newSession = {
            data: input.data,
            notes: input.notes,
            content: input.content,
        }

        try {
          await axiosApi.post('/patients/session', newSession)
          setRedirect(true) 
          console.log('New session was saved', newSession)
        } catch (err) {
          console.error(err)
        } 
      } 
      if(redirect){
        return <Redirect to='/patients'></Redirect>
      }

    return (
        <section>
            <form onSubmit={handleClick}>
                <SessionBackground>
                    <Input
                        name= "data"
                        required
                        value={input.data} 
                        placeholder= "Data"
                        onChange= {handleChange}
                        type = "text"
                    />
                   
                    <ImportantStyled>
                        <Input
                            name= "notes"
                            required
                            value={input.notes} 
                            placeholder= "Data"
                            onChange= {handleChange}
                            type = "text"
                        />
                    </ImportantStyled>
                    <Card>
                        <Input
                            name= "content"
                            required
                            value={input.content} 
                            placeholder= "Content"
                            onChange= {handleChange}
                            type = "text"
                        />
                    </Card>
                    <div>
                       <Button type="submit">Save</Button>
                    </div>
                </SessionBackground>
            </form>
            {sessions && sessions.map((session) => (
                <SessionBackground>
                    <h2>{session.date}</h2>
                    <ImportantStyled>{session.notes}</ImportantStyled>
                    <Card>{session.content}</Card>
                    <div>
                        <DeleteBtn><FontAwesomeIcon icon={faTrashAlt} /></DeleteBtn>
                        <Button>Edit</Button>
                    </div>
                </SessionBackground>
            ))}
        </section>
    );
};


const SessionBackground = styled(CardContainer)`
    background-color: rgb(194, 247, 239);
`

const ImportantStyled = styled(CardContainer)`
    background-color:  #FFC300;
`

const DeleteBtn = styled(StyledBtn)`
    background-color: rgb(255, 127, 80);
    &:hover{
        background-color: rgb(250, 45, 25);
        color: white;
    }
`
export default History;

