import React, { useState, useEffect } from "react";
import {  Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";
import Card, { CardContainer } from "../../components/layouts/Card";
import Button, { StyledBtn } from "../../components/layouts/Button";
import Input from "../../components/forms/Input";
import PageWrapper from "../../components/layouts/PageWrapper";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const URL = "/api/history"
 
const History = () => {
    let { id } = useParams();
    const [input, setInput] = useState({});
    const [redirect, setRedirect] = useState(false); 
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getHistory()
    }, [])
    
    
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

      const deleteSession = (id) => {
          console.log('delete cliiicked')
        axiosApi.delete(`${URL}/${id}`).then(res => {
            const del = history.filter(session => id !== session.id)
            setHistory(del)
        })
    }
      //Render previous sessions
      const renderSessions = () => {
        return history && history.map(({ date, notes, content, _id }) => {
            return (
                <SessionBackground>
                    <h3>Date: {date}</h3>
                    <StyledSection>
                        <NotesStyled>{notes}</NotesStyled>
                        <Card>{content}</Card>
                    </StyledSection>
      
                    <div>
                        <DeleteBtn  onClick={() => deleteSession(_id)}><FontAwesomeIcon icon={faTrashAlt} /></DeleteBtn>
                        <Button>Edit</Button>
                    </div>
                </SessionBackground>
            )
        })
    }
    //

      if(redirect){
        return <Redirect to='/mypatients'></Redirect>
      }

    return (
        <PageWrapper>
            <form onSubmit={createSession}>
                <SessionBackground>
                    <input
                        name= "date"
                        required
                        value={input.date} 
                        placeholder= "Date"
                        onChange= {handleChange}
                        type = "date"
                    />
                
                   <StyledSection>
                    <ImportantStyled
                            name= "notes"
                            required
                            value={input.notes} 
                            placeholder= "Notes"
                            onChange= {handleChange}
                            type = "text"
                        />
                    
                        
                        <Input
                            name= "content"
                            required
                            value={input.content} 
                            placeholder= "Content"
                            onChange= {handleChange}
                            type = "text"
                        />

                   </StyledSection>

                                     
                    <div>
                       <Button type="submit">Save</Button>
                    </div>
                </SessionBackground>
            </form>
            <article>
                {renderSessions()}
            </article>
        </PageWrapper>
    );
};


const SessionBackground = styled(CardContainer)`
    background-color: rgb(218, 245, 242);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    border: 1px solid black;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
        color: #495057;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
    &:disabled {
        cursor: not-allowed;
        background-color: grey;
    }
`
const ImportantStyled = styled(StyledInput)`
    background-color:  #FFC300;
`

const NotesStyled = styled(CardContainer)`
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

