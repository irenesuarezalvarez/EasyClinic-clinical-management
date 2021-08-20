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


const History = () => {
    let { id } = useParams();
    const [input, setInput] = useState({});
    const [redirect, setRedirect] = useState(false); 
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getHistory()
    }, [])
    
    
    const getHistory = async () =>{
        const response = await axiosApi.get(`/api/history/${id}`);
        setHistory(response.data)
    } 
   
       
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
          setRedirect(true) 
          console.log('New session was saved', newSession)
          await axiosApi.post(`/api/${id}/session`, newSession)
        } catch (err) {
          console.error(err)
        } 
      } 
      if(redirect){
        return <Redirect to='/mypatients'></Redirect>
      }

    return (
        <PageWrapper>
            <form onSubmit={handleClick}>
                <SessionBackground>
                    <input
                        name= "data"
                        required
                        value={input.data} 
                        placeholder= "Data"
                        onChange= {handleChange}
                        type = "text"
                    />
                
                   <StyledSection>
                    <ImportantStyled
                            name= "notes"
                            required
                            value={input.notes} 
                            placeholder= "Data"
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
          {/*  {history && history.map((session) => (
                <SessionBackground>
                    <h2>{session.date}</h2>

                    <StyledSection>
                        <NotesStyled>{session.notes}</NotesStyled>
                        <Card>{session.content}</Card>
                    </StyledSection>
                  
                    <div>
                        <DeleteBtn><FontAwesomeIcon icon={faTrashAlt} /></DeleteBtn>
                        <Button>Edit</Button>
                    </div>
                </SessionBackground>
            ))}  */}
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

