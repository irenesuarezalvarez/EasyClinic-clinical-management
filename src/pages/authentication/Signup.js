import React, { useState } from "react";
import axios from 'axios';


import Input from "./../../components/forms/Input";
import Select from "./../../components/forms/Select";
import Card from "./../../components/layouts/Card";
import Button from "../../components/layouts/Button";
import PageWrapper from "../../components/layouts/PageWrapper";


function Signup() {
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async event => {
    event.preventDefault()
    const newUser = {
      username: input.username,
      email: input.email,
      id: input.id,
      role: input.role,
      password: input.password
    } 
     try {
      await axios.post('http://localhost:5000/auth/signup', newUser)
      /* setRedirect(true) */

    } catch (err) {
      console.error(err)
    } 
  } 


  return (
    <PageWrapper>
        <form>
          <Card title="Sign Up">
            <Input
              label="Username"
              name="username"
              required
              value={input.username} 
              placeholder="Enter your username"
              onChange={handleChange}
              type="text"
            />
            <Input
              label="Email "
              name= "email"
              required
              value={input.email} 
              placeholder= "Enter your email"
              onChange= {handleChange}
              type = "text"
            />
            <Input
              label="Id "
              name= "id"
              required
              value={input.id} 
              placeholder= "Enter your id"
              onChange= {handleChange}
              type = "text"
            />
            <Select
              label="Role position "
              name= "role"
              required
              value={input.role} 
              placeholder= "Enter your role position"
              onChange= {handleChange}
              type = "text"
            >
                <option value="admin">Administrative</option>
                <option value="prof">Professional</option>
            </Select>
            

            <Input
              label="Password "
              name= "password"
              required
              value={input.password} 
              placeholder= "Enter your password"
              onChange= {handleChange}
              type = "password"
            />
            <Button onClick= {handleClick}>Create account</Button>
          </Card>
        </form>
    </PageWrapper>

  );
}

export default Signup;
