import React, { useState, useEffect, useCallback } from "react";
import { Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import axiosApi from "../../utils/AxiosApi";
import Box from "../../components/layouts/Box";
import Button from "../../components/layouts/Button";
import Card from "../../components/layouts/Card";
import {StyledInput} from "../../components/forms/Input";
import PageWrapper from "../../components/layouts/PageWrapper";
import StyledLink from "../../components/layouts/StyledLink";
import TextArea from "../../components/forms/Textarea";

import Editor from "../../components/layouts/Editor"
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./SessionStyles.css"


const URL = "/api/history"
 
const HistoryPage = () => {
    const { id } = useParams();
    const [input, setInput] = useState({});
    const [redirect, setRedirect] = useState(false); 
    const [history, setHistory] = useState([]);
    const [boolean, setBoolean] = useState(false);
    const [value, setValue] = useState("")
  
    const callback = useCallback((value) => {
        setValue(value);
    }, []);


   /////
/*    function Editor(){ 
        
        const handleOnChange = (e, editor) =>{
            const data= editor.getData()
            console.log(data);
        }
        return(
            <div>
                <h1>Session</h1>
                <CKEditor
                    editor={ClassicEditor}
                    onChange={handleOnChange}
                />
                <div>
                    Value: {value}
                </div>
            </div>
        )
    } */
   /////
    const toogleBoolean = () => setBoolean(!boolean);
    
    useEffect(()=>{
        getHistory() 
    }, [])

    useEffect(()=>{
        getHistory() 
    }, [boolean])

    const getHistory = async () =>{
        try{
            const response = await axiosApi.get(`${URL}/${id}`);
            const data = await response.data
            setHistory(data.history)
        }
        catch(err){
            console.log(err)
        }
    } 
       
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    /////////////
/*     const handleEditorChange = (e, editor) =>{
        const data = editor.getData()
        setValue(data)
    }
    const addContentToInput = (content) =>{
        console.log('im in', content)
        setInput((prevState) => ({
            ...prevState,
            content: content,
        }));
    } */
    /////////////
   /*  if(value.length > 0 ){
        console.log('VALUUE', value[0].props.children)
        JSON.stringify(value)
    } */
   
    const createSession = async event => {
        event.preventDefault()
     
        const newSession = {
            date: input.date,
            notes: input.notes,
            content: JSON.stringify(value),
            patient: id
        }
    
        try {
            console.log('aqui-->', JSON.stringify(value))
            await axiosApi.post(`${URL}/create`, newSession)
            toogleBoolean()
        } catch (err) {
            console.error(err)
        } 
    } 

    const deleteSession = async (id, patient) => {
        try {
            await axiosApi.delete(`${URL}/${id}/${patient}`)
            const del = history.filter(session => id !== session.id)
            setHistory(del)
            toogleBoolean()
        } catch (err) {
            console.error(err)
        } 

    }    

    //Render previous sessions
    const renderSessions = () => {
          return history.length > 0 && history.map(({ date, notes, content, _id, patient }) => {
           
            return (
                <Card bgcolor="rgba(232, 236, 237)" width="100%" key={_id}>

                    <Box direction="row">
                        <h3>Date: {date}</h3>
                        <Box bgcolor="rgba(255, 195, 0)" shadow="0 0 20px rgba(0 0 0 / 15%)" height="5rem" width="16rem" margin="0 0 0 1rem">
                            {notes}
                        </Box>
                    </Box>
                   
                    <Box radius="0">
                        <Box bgcolor="white" radius="0" shadow="0 0 20px rgba(0 0 0 / 15%)" height="15rem" width="25rem" margin="1rem">
                            {content}
                        </Box>
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
                
                <Card as={"form"} bgcolor="rgba(197, 225, 232)" margin="0 0 1rem 0" width="100%">
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
                         
                            <div >
                                <Editor parentCallback={callback} />
                                <h2>Value: {value}</h2>
                            </div>
                         {/*    <TextArea
                                name="content"
                                required
                                value={input.content} 
                                onChange={handleChange}
                                type="text"
                            /> */}
                    </Box>

                    <Box direction= "row" margin= "1rem 0 1.5rem" position="space-between">
                        <StyledLink to="/mypatients">Back</StyledLink>
                        <Button type="submit" onClick={(e) => createSession(e)}>Save</Button>
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

