import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import axiosApi from "../../utils/AxiosApi";
import Box from "../../components/layouts/Box.js";
import Button from "../../components/layouts/Button.js";
import Card from "../../components/layouts/Card";
import Input from "./../../components/forms/Input.js";
import PageWrapper from "../../components/layouts/PageWrapper.js";
import Select from "./../../components/forms/Select";

const AppointmentsPage = () => {
    const [input, setInput] = useState({});
    const [redirect, setRedirect] = useState(false); 
    const [professionals, setProfessionals] = useState([]);
  
    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const result = await axiosApi.get("/professionals"); 
                const professionals = result.data;
                setProfessionals([...professionals]);
            }
            catch(err){
                console.log(err)
            }     
    };

    fetchUsers();
    }, []);
  
    const handleChange = (event) => {
        const { name, value } = event.target;

        setInput((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };
      
    const createPatient = async event => {
        event.preventDefault()
     
        const newAppointment = {
            subject: input.subject,
            startTime: input.startTime,
            endTime: input.endTime,
            professional: input.professional,
        }
     
        try {
            const result = await axiosApi.post('/appointments', newAppointment)
            const data = await result;
            setRedirect(data.status === 200);
            console.log('New appointment was created', newAppointment)
        } catch (err) {
            console.error(err)
        } 
  } 

  if(redirect){
    return <Redirect to='/patients'/>
  }

  return (
    <PageWrapper>
        <form onSubmit={createPatient}>
            <Card title="Appointment">
                <Input
                    label="Subject "
                    name= "subject"
                    required
                    value={input.subject} 
                    placeholder="subject"
                    onChange={handleChange}
                    type="text"
                />
                <Input
                    label="startTime "
                    name="startTime"
                    required
                    value={input.startTime} 
                    placeholder="startTime"
                    onChange={handleChange}
                    type="text"
                />
                <Input
                    label="endTime "
                    name="endTime"
                    required
                    value={input.endTime} 
                    placeholder="endTime"
                    onChange={handleChange}
                    type="text"
                />
            </Card>

            <Card title="Professional Assistant">
                <Select
                    name="professional"
                    label="Professional"
                    required
                    onChange={handleChange}
                    disabled={professionals.length <= 0}
                    >
                        <option value="">--select professional--</option>
                        {professionals.length > 0 && professionals.map((professional) => (
                            <option value={professional._id} key={professional._id}>
                            {professional.username}
                            </option>
                        ))}
                </Select> 
            </Card>

            <Box margin="1rem" padding="1rem">
                <Button type="submit">Create</Button>
            </Box>
            
        </form>
    </PageWrapper>
  );
}

export default AppointmentsPage;