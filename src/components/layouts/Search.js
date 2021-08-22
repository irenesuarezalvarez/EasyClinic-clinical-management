import React, { useState } from "react";


import axiosApi from "../../utils/AxiosApi";

import Input from "../forms/Input";
import BtnDiv from "./BtnDiv";
import Button from "./Button";

const Searcher = () => {
    const [input, setInput] = useState({});
    const [patients, setPatients] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setInput((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };

    const searchPatient = async event => {
        event.preventDefault()
        console.log('search clicked')
        
        try {
          const response = await axiosApi.post('/patients/search', input)
          const data = await response;
          console.log('New patient was found', data.data)//data.data devuelve un []
          setPatients(data.data)
        } catch (err) {
          console.error(err)
        } 
    } 

     
    return(
        <div>
            <form onSubmit={searchPatient}>
                <Input
                    label="Name "
                    name= "name"
                    required
                    value={input.name} 
                    placeholder= "Name"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Surname "
                    name= "surname"
                    required
                    value={input.surname} 
                    placeholder= "Surname"
                    onChange= {handleChange}
                    type = "text"
                />
                 <BtnDiv>
                    <Button type="submit">Seach</Button>
                </BtnDiv>

            </form>
           
        </div>
    )
}

export default Searcher;